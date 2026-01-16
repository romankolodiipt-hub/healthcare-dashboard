export enum MonthsEnum {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

// Збережено оригінальний тип для зворотної сумісності
export type Months =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type Diagnostic = {
  name: string;
  description: string;
  status: string;
};

// 📊 ОНОВЛЕНО: удосконалена структура для результатів лабораторних тестів
export interface LabResult {
  id?: string;
  name: string;
  date?: string;
  result?: string;
  status?: "Normal" | "Abnormal" | "Critical";
}

export type Level = "Lower than Average" | "Normal" | "Higher than Average";

export type Indicator = {
  value: number;
  levels: Level;
};

export type PatientsDiagnosisHistory = {
  month: Months;
  year: number;
  blood_pressure: {
    systolic: Indicator;
    diastolic: Indicator;
  };
  heart_rate: Indicator;
  respiratory_rate: Indicator;
  temperature: Indicator;
};

export type Patient = {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: PatientsDiagnosisHistory[];
  diagnostic_list: Diagnostic[];
  lab_results: LabResult[];
};

export type SelectedRange = "6" | "12" | "18";

export type ChartData = {
  months: string[] | [];
  diastolicValues: number[] | [];
  systolicValues: number[] | [];
};

export type DiagnosticTableHeader = (
  | "Problem/Diagnosis"
  | "Description"
  | "Status"
)[];

export type SelectOption = {
  value: string;
  name: string;
};

/**
 * 🎯 НОВИЙ: Generic тип для API responses
 * Можна розширити для всіх API запитів
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
