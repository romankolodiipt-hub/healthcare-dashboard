import { Indicator } from "../types/types";
import { VitalCard } from "./VitalCard";

interface HealthMetricsProps {
  respiratory_rate: Indicator;
  temperature: Indicator;
  heart_rate: Indicator;
}

export const HealthMetrics: React.FC<HealthMetricsProps> = ({
  respiratory_rate,
  temperature,
  heart_rate,
}) => {
  return (
    <article className="" aria-labelledby="health-metrics-title">
      <h3 id="health-metrics-title" className="sr-only">
        Health Metrics
      </h3>
      <div className="flex justify-between gap-5">
        <VitalCard
          title="Respiratory Rate"
          level={respiratory_rate.levels}
          measurement={{ unit: "bpm", value: respiratory_rate.value }}
          iconSrc="/images/respiratory-rate.svg"
          bgColor="#E0F3FA"
        />
        {/* 🐛 ВИПРАВЛЕНО: було respiratory_rate.levels, тепер temperature.levels */}
        <VitalCard
          title="Temperature"
          level={temperature.levels}
          measurement={{ unit: "°F", value: temperature.value }}
          iconSrc="/images/temperature.svg"
          bgColor="#FFE6E9"
        />
        <VitalCard
          title="Heart Rate"
          level={heart_rate.levels}
          measurement={{ unit: "bpm", value: heart_rate.value }}
          iconSrc="/images/HeartBPM.svg"
          bgColor="#FFE6F1"
        />
      </div>
    </article>
  );
};
