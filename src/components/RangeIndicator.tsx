import { Level } from "../types/types";
import { LevelIcon } from "./LevelIcon";

interface RangeInicatorProps {
  level: Level;
}

export const RangeInicator: React.FC<RangeInicatorProps> = ({ level }) => {
  return (
    <div className="flex gap-2 items-center">
      <LevelIcon level={level} />
      <p className="body-regular-14">{level}</p>
    </div>
  );
};
