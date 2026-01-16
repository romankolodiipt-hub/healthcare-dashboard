"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { PatientsDiagnosisHistory } from "../types/types";
import { getDataForChart } from "../utils/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface ChartProps {
  diagnosisHistory: PatientsDiagnosisHistory[];
}

export const Chart: React.FC<ChartProps> = ({ diagnosisHistory }) => {
  const { months, diastolicValues, systolicValues } =
    getDataForChart(diagnosisHistory);

  const data = {
    labels: months,
    datasets: [
      {
        pointRadius: 7,
        pointHoverRadius: 8,
        pointBorderColor: "#FFFFFF",
        label: "Diastolic",
        data: diastolicValues,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
      },
      {
        pointRadius: 7,
        pointHoverRadius: 8,
        pointBorderColor: "#FFFFFF",
        label: "Systiolic",
        data: systolicValues,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
      },
    ],
  };
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Blood Pressure Chart",
      },
    },
    scales: {
      x: {
        type: "category",
        ticks: {
          color: "#072635",
          font: {
            family: "Manrope",
            size: 12,
          },
        },
      },
      y: {
        type: "linear",
        ticks: {
          color: "#072635",
          font: {
            family: "Manrope",
            size: 12,
          },
        },
      },
    },
  };
  return <Line options={options} data={data} />;
};
