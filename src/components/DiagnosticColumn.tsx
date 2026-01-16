"use client";
import { DiagnosticHistory } from "./DiagnosticHistory";
import { DiagnosticList } from "./DiagnosticList";
import { Article } from "./Article";
import { useGetPatient } from "../hooks/hooks";

export const DiagnosticColumn = () => {
  const patient = useGetPatient();

  const diagnosticList = patient ? patient.diagnostic_list : [];

  return (
    <section className="flex-1 width-full flex flex-col gap-8">
      <div>
        <Article>
          <DiagnosticHistory patient={patient} />
        </Article>
      </div>
      <div className="flex-1 overflow-auto">
        <Article>
          <DiagnosticList diagnosticList={diagnosticList} />
        </Article>
      </div>
    </section>
  );
};
