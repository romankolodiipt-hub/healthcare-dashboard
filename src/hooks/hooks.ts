"use client";
import { useParams } from "next/navigation";
import { Patient } from "../types/types";
import { useContext } from "react";
import { PatientsContext } from "../context/Context";
import { convertToSlug } from "../utils/utils";
import { useState, useEffect } from "react";

/**
 * Хук для отримання поточного пацієнта за slug з URL
 * - Користувач відвідує /patients/john-doe
 * - Хук знаходить пацієнта з ім'ям "John Doe"
 * - Повертає дані пацієнта або undefined
 *
 * @returns Об'єкт пацієнта або undefined якщо не знайдено
 */
export const useGetPatient = () => {
  const { slug } = useParams();

  // Отримуємо контекст з новою структурою
  const context = useContext(PatientsContext);
  const patients: Patient[] = context?.patients || [];

  return patients.find(({ name }) => {
    const patientSlug = convertToSlug(name);
    return patientSlug === slug;
  });
};

/**
 * ⚠️ DEPRECATED хук - більше не використовується!
 *
 * Раніше цей хук перестраивав весь контекст при resize вікна,
 * що викликало ненотрібні перерендери всього дерева компонентів.
 *
 * Замість цього тепер контекст не змінюється при resize.
 *
 * Залишений для зворотної сумісності, але вже не потрібен.
 */
export const useResize = () => {
  const [tick, setCount] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const trigger = () => {
      setCount((prev) => prev + 1);
    };
    window.addEventListener("resize", trigger);
    window.visualViewport?.addEventListener("resize", trigger);
    return () => {
      window.removeEventListener("resize", trigger);
      window.visualViewport?.removeEventListener("resize", trigger);
    };
  }, []);
  return tick;
};
