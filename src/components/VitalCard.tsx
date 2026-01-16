import { Level } from "../types/types";
import { RangeInicator } from "./RangeIndicator";

type Measurement = {
  value: number;
  unit: string;
};

interface VitalCardProps {
  title: string;
  measurement: Measurement;
  level: Level;
  iconSrc: string;
  bgColor: string;
}

export const VitalCard: React.FC<VitalCardProps> = ({
  title = "",
  measurement,
  level = "Normal",
  iconSrc = "",
  bgColor,
}) => {
  return (
    <div
      className={`md:w-1/3 w-52 h-60 p-4 rounded-xl flex flex-col gap-4`}
      style={{ background: bgColor }}
    >
      <img src={iconSrc} alt="No Image" className="md:w-24 md:h-24 w-14 h-14" />
      <div>
        <h4 className="body-regular-14pt">{title}</h4>
        <p className="card-title-24pt">
          {measurement.value}
          {measurement.unit === "bpm" && " "}
          {measurement.unit}
        </p>
      </div>
      <RangeInicator level={level} />
    </div>
  );
};
