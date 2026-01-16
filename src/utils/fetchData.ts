import { MOCK_DATA_PATIENTS } from "../consts/consts";
import { Patient } from "../types/types";

/**
 * Утиліта для затримки виконання (використовується для retry логіки)
 * @param ms - Час затримки в мілісекундах
 */
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Завантажує дані пацієнтів з обробкою помилок та retry логікою
 * - Робить кілька спроб підключення з експоненціальною затримкою
 * - При невдачі використовує mock дані як fallback
 * - Перевіряє наявність credentials перед запитом
 *
 * @param retries - Кількість спроб повторного підключення (за замовчуванням 3)
 * @returns Масив пацієнтів або mock дані у випадку помилки
 */
export const fetchData = async (retries = 3): Promise<Patient[]> => {
  const username = process.env.AUTH_USERNAME;
  const password = process.env.AUTH_PASSWORD;

  // Перевіряємо наявність credentials
  if (!username || !password) {
    console.warn("❌ AUTH credentials відсутні, використовуємо mock дані");
    return MOCK_DATA_PATIENTS;
  }

  const creds = Buffer.from(`${username}:${password}`).toString("base64");

  // Цикл для retry логіки з експоненціальною затримкою
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${creds}`,
            "Content-Type": "application/json",
          },
          cache: "no-store",
        }
      );

      // Якщо API повернув помилку
      if (!res.ok) {
        // Якщо це не остання спроба, чекаємо та пробуємо знову
        if (attempt < retries) {
          const delayMs = 1000 * (attempt + 1); // 1s, 2s, 3s...
          console.warn(
            `⏳ Спроба ${attempt + 1} не вдалася (статус ${
              res.status
            }), чекаємо ${delayMs}ms...`
          );
          await sleep(delayMs);
          continue;
        }
        throw new Error(`API повернув статус ${res.status}`);
      }

      // Успішно отримали дані
      console.log("✅ Дані пацієнтів успішно завантажені");
      return res.json();
    } catch (error) {
      // Якщо це остання спроба, повертаємо mock дані
      if (attempt === retries) {
        console.error(
          "❌ Помилка при завантаженні даних після всіх спроб:",
          error
        );
        console.log("📋 Використовуємо mock дані замість API");
        return MOCK_DATA_PATIENTS;
      }

      // Експоненціальна затримка: 1s, 2s, 3s, тощо
      const delayMs = 1000 * (attempt + 1);
      console.warn(
        `⏳ Помилка мережі, спроба ${
          attempt + 1
        }/${retries}, чекаємо ${delayMs}ms...`
      );
      await sleep(delayMs);
    }
  }

  // Fallback: якщо щось пішло не так, повертаємо mock дані
  return MOCK_DATA_PATIENTS;
};
