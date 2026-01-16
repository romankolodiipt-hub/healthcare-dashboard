"use client";

import Image from "next/image";
import { convertDate } from "../utils/utils";
import { PatientCardField } from "./PatientCardField";
import { Article } from "./Article";
import { Patient } from "../types/types";
import { memo } from "react";

interface PatientCardProps {
  patient: Patient;
}

// Основний компонент карток пацієнта
const PatientCardComponent: React.FC<PatientCardProps> = ({ patient }) => {
  return (
    <Article>
      <div className="flex flex-col gap-8 py-3">
        <h2 id="profile-card-title" className="sr-only">
          Patient Card
        </h2>
        <div className="flex flex-col items-center gap-6">
          {/* 📸 ОПТИМІЗОВАНО: додав sizes, quality, proper alt */}
          <Image
            src={patient.profile_picture}
            alt={`Фото профілю ${patient.name}`}
            width={192}
            height={192}
            className="md:w-48 md:h-48 w-24 h-24 rounded-full"
            priority={false}
            sizes="(max-width: 768px) 96px, 192px"
            quality={75}
          />
          <h2 className="card-title-24pt">{patient.name}</h2>
        </div>
        <div className="flex flex-col gap-6">
          <PatientCardField
            iconSrc={"/icons/BirthIcon.svg"}
            title={"Date of Birth"}
            value={convertDate(patient.date_of_birth)}
          />
          <PatientCardField
            iconSrc={"/icons/FemaleIcon.svg"}
            title={"Gender"}
            value={patient.gender}
          />
          <PatientCardField
            iconSrc={"/icons/PhoneIcon.svg"}
            title={"Contact Info."}
            value={patient.phone_number}
          />
          <PatientCardField
            iconSrc={"/icons/PhoneIcon.svg"}
            title={"Emergency Contacts"}
            value={patient.emergency_contact}
          />
          <PatientCardField
            iconSrc={"/icons/InsuranceIcon.svg"}
            title={"Insurance Provider"}
            value={patient.insurance_type}
          />
        </div>
        <div className="flex justify-center mt-2">
          <button
            className="body-emphasized-14pt w-56 rounded-3xl bg-[#01F0D0] px-10 py-3 cursor-pointer hover:opacity-80 transition-opacity duration-200"
            aria-label="Show all information"
          >
            Show All Information
          </button>
        </div>
      </div>
    </Article>
  );
};

// ⚡ ОПТИМІЗОВАНО: memo запобігає перерендеру при однакових пропсах
// Порівнюємо тільки ім'я пацієнта для оптимізації
export const PatientCard = memo(
  PatientCardComponent,
  (prevProps, nextProps) => {
    return prevProps.patient.name === nextProps.patient.name;
  }
);

PatientCard.displayName = "PatientCard";
