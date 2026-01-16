"use client";
import React from "react";
import { Patient } from "../types/types";
import { PatientsContext, PatientContextType } from "../context/Context";

interface ProviderProps {
  children: React.ReactNode;
  data: Patient[];
}

export default function PatientsProvider({ children, data }: ProviderProps) {
  // Формуємо значення контексту зі структурою PatientContextType
  const value: PatientContextType = {
    patients: data,
    isLoading: false,
    error: null,
  };

  return (
    <PatientsContext.Provider value={value}>
      {children}
    </PatientsContext.Provider>
  );
}
