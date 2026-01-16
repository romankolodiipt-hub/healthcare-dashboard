"use client";

import { createContext, useContext, ReactNode } from "react";
import { Patient } from "../types/types";

// Тип для контексту з додатковою інформацією про стан
export interface PatientContextType {
  patients: Patient[];
  isLoading: boolean;
  error: string | null;
}

// Значення за замовчуванням для контексту
const defaultValue: PatientContextType = {
  patients: [],
  isLoading: true,
  error: null,
};

export const PatientsContext = createContext<PatientContextType>(defaultValue);

// Хук для безпечного доступу до контексту з валідацією
export const usePatients = () => {
  const context = useContext(PatientsContext);
  if (!context) {
    throw new Error(
      "usePatients повинен використовуватися всередині PatientsProvider"
    );
  }
  return context;
};
