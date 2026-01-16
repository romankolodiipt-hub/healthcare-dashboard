import { useState } from "react";
import { HealthMetrics } from "./HealthMetrics";
import { Chart } from "./Chart";
import {
  Patient,
  SelectedRange,
  PatientsDiagnosisHistory,
  SelectOption,
} from "../types/types";
import { StatisticCard } from "./StatisticCard";
import { Select } from "./Select";

interface DiagnosticHistoryProps {
  patient?: Patient;
}

export const DiagnosticHistory: React.FC<DiagnosticHistoryProps> = ({
  patient,
}) => {
  const [selectValue, setSelectValue] = useState<SelectedRange>("6");

  if (!patient) {
    return null;
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SelectedRange;
    setSelectValue(value);
  };

  const selectedRangeHistory = patient.diagnosis_history.slice(
    0,
    Number(selectValue)
  );

  const dataForLastMonth: PatientsDiagnosisHistory = selectedRangeHistory[0];

  const {
    blood_pressure: { diastolic, systolic },
    respiratory_rate,
    temperature,
    heart_rate,
  } = dataForLastMonth;
  const reverseSelectedRangeHistory = selectedRangeHistory.reverse();

  const options: SelectOption[] = [
    {
      value: "6",
      name: "Last 6 Months",
    },
    {
      value: "12",
      name: "Last 12 Months",
    },
    {
      value: "18",
      name: "Last 18 Months",
    },
  ];

  return (
    <>
      <h2 className="card-title-24pt">Diagnosis History</h2>
      <div className="flex p-4 rounded-lg bg-[#F4F0FE] gap-8 h-80">
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex justify-between h-6">
            <h3 className="inner-card-title-18pt">Blood Pressure</h3>
            <Select
              value={selectValue}
              onChange={handleSelectChange}
              options={options}
              classes="w-32 body-regular-14 mr-5"
            />
          </div>
          {patient && (
            <div className="h-full w-full">
              <Chart diagnosisHistory={reverseSelectedRangeHistory} />
            </div>
          )}
        </div>
        <div className="w-52 flex flex-col gap-4">
          <StatisticCard
            value={systolic.value}
            level={systolic.levels}
            title="Systolic"
            dotColor="#E66FD2"
          />
          <p className="w-full border-b text-[var(--unnamed-color-cbc8d4)]"></p>
          <StatisticCard
            value={diastolic.value}
            level={diastolic.levels}
            title="Diastolic"
            dotColor="#8C6FE6"
          />
        </div>
      </div>
      <HealthMetrics
        respiratory_rate={respiratory_rate}
        heart_rate={heart_rate}
        temperature={temperature}
      />
    </>
  );
};
