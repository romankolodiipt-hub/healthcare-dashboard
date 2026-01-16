import { PatientsDiagnosisHistory, ChartData } from "@/src/types/types";

/**
 * Конвертує текст у URL-friendly slug
 * - Видаляє пробіли та спеціальні символи
 * - Переводить у нижній регістр
 * Приклад: "John Doe" → "john-doe"
 *
 * @param text - Вихідний текст
 * @returns Slug у форматі "like-this"
 */
export const convertToSlug = (text: string): string => {
  return text.trim().replace(/\s+/g, "-").toLowerCase();
};

/**
 * Витягує дані для графіка з історії діагнозів
 * - Збирає всі місяці та значення систолічного/діастолічного тиску
 * - Використовується для відображення графіка кров'яного тиску
 *
 * @param diagnosisHistory - Масив історії діагнозів пацієнта
 * @returns Об'єкт з масивами місяців та значень тиску
 */
export const getDataForChart = (
  diagnosisHistory: PatientsDiagnosisHistory[]
): ChartData => {
  return diagnosisHistory.reduce<ChartData>(
    (acc, item) => ({
      months: [...acc.months, `${item.month.slice(0, 3)}, ${item.year}`],
      diastolicValues: [
        ...acc.diastolicValues,
        item.blood_pressure.diastolic.value,
      ],
      systolicValues: [
        ...acc.systolicValues,
        item.blood_pressure.systolic.value,
      ],
    }),
    {
      months: [],
      diastolicValues: [],
      systolicValues: [],
    }
  );
};

/**
 * Конвертує ISO дату у читаний формат
 * Приклад: "2006-08-19" → "August 19, 2006"
 *
 * @param dateStr - ISO строка дати (YYYY-MM-DD)
 * @returns Дата у форматі "Month Day, Year"
 */
export const convertDate = (dateStr: string): string => {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
