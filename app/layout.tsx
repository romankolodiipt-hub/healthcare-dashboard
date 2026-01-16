import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Manrope } from "next/font/google";
import { Tabs } from "@/src/components/Tabs";
import { TABS_CONFIG } from "@/src/consts/tabs.config";
import { Account } from "@/src/components/Account";
import { fetchData } from "@/src/utils/fetchData";
import PatientsProvider from "@/src/providers/providers";
import { Patient } from "@/src/types/types";
import Image from "next/image";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// 📝 ОНОВЛЕНО: Кращі metadata для SEO
export const metadata: Metadata = {
  title: "Healthcare Dashboard - Моніторинг здоров'я пацієнтів",
  description:
    "Платформа для моніторингу здоров'я пацієнтів з аналізом діагнозів та показників",
  keywords: ["healthcare", "dashboard", "medical", "patients"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Завантажуємо дані пацієнтів на сервері
  const data: Patient[] = await fetchData();

  return (
    <html
      lang="uk"
      className={`${manrope.variable} font-manrope min-h-[1195px] h-screen`}
    >
      <body className="bg-[#F6F7F8] opacity-100 p-5 flex flex-col min-h-[1195px] h-full gap-8 min-w-[1600px]">
        {/* 🔄 Провайдер контексту з даними пацієнтів */}
        <PatientsProvider data={data}>
          <header className="flex py-3 px-8 items-center justify-between gap-8 bg-[var(--unnamed-color-ffffff)] rounded-[70px]">
            <div className="logo" aria-label="Логотип Healthcare Dashboard">
              <Link href="/">
                <Image
                  src="/images/TestLogo.svg"
                  alt="Healthcare Dashboard Logo"
                  width={211}
                  height={48}
                  priority
                />
              </Link>
            </div>
            <Tabs tabs={TABS_CONFIG} />
            <Account />
          </header>
          <main className="flex-1 overflow-auto">{children}</main>
        </PatientsProvider>
      </body>
    </html>
  );
}
