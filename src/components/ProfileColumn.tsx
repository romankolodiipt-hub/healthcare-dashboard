"use client";

import { PatientCard } from "./PatientCard";
import { LabResults } from "./LabResults";
import { useGetPatient } from "../hooks/hooks";

export const ProfileColumn = () => {
  const patient = useGetPatient();
  if (!patient) {
    return <p>Patient not found</p>;
  }
  return (
    <section className="md:w-1/4 min-w-[368px] rounded-2xl flex flex-col h-full gap-8">
      <div>
        <PatientCard patient={patient} />
      </div>
      <div className="flex-1 overflow-auto">
        <LabResults labResults={patient.lab_results || []} />
      </div>
    </section>
  );
};
