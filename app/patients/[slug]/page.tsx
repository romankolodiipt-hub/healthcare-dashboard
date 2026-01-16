import { fetchData } from "@/src/utils/fetchData";
import { convertToSlug } from "@/src/utils/utils";
import { DiagnosticColumn } from "@/src/components/DiagnosticColumn";
import { ProfileColumn } from "@/src/components/ProfileColumn";

/**
 * ⚡ ОПТИМІЗОВАНО: Генерує статичні сторінки на час білду
 * - Значно швидше завантаження для користувачів
 * - Менше навантаження на сервер під час продакшену
 * - Сторінки кешуються в CDN
 */
export async function generateStaticParams() {
  try {
    const patients = await fetchData();
    return patients.map(({ name }) => ({
      slug: convertToSlug(name),
    }));
  } catch (error) {
    console.error("❌ Помилка при генерації статичних параметрів:", error);
    // Повертаємо пустий масив, щоб побудова не впала
    return [];
  }
}

export default async function PatientPage() {
  return (
    <>
      <DiagnosticColumn />
      <ProfileColumn />
    </>
  );
}
