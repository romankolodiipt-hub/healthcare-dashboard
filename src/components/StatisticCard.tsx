import { LevelIcon } from "./LevelIcon";
import { Level } from "../types/types";

interface StatisticCardProps {
  value: number;
  level: Level;
  title: string;
  dotColor: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  value,
  level,
  title,
  dotColor,
}) => {
  const classes = `w-[14px] h-[14px] rounded-full`;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <div className={classes} style={{ backgroundColor: dotColor }}></div>
        <h4 className="body-emphasized-14pt">{title}</h4>
      </div>
      <div className="card-title-24pt">{value}</div>
      <div className="flex gap-2 items-center">
        <LevelIcon level={level} />
        <p className="body-regular-14">{level}</p>
      </div>
    </div>
  );
};
