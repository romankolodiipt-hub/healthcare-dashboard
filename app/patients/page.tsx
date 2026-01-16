"use client";

import { useContext, useEffect } from "react";
import { PatientsContext } from "@/src/context/Context";
import { Patient } from "@/src/types/types";
import { convertToSlug } from "@/src/utils/utils";
import { useRouter } from "next/navigation";

export default function PatientsPage() {
  const context = useContext(PatientsContext);
  const patients: Patient[] = context?.patients || [];
  const router = useRouter();

  // 🚀 АВТОВИБІР першого пацієнта по дефолту
  useEffect(() => {
    if (patients.length > 0) {
      const firstPatientSlug = convertToSlug(patients[0].name);
      router.push(`/patients/${firstPatientSlug}`);
    }
  }, [patients, router]);

  return <div>Loading patient...</div>;
}
