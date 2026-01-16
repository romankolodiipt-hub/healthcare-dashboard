import { Level } from "../types/types";

interface LevelIconProps {
  level: Level;
}

export const LevelIcon: React.FC<LevelIconProps> = ({ level }) => {
  const iconDown = "/icons/ArrowDown.svg";
  const iconUp = "/icons/ArrowUp.svg";
  if (level === "Normal") return null;

  const src = level === "Higher than Average" ? iconUp : iconDown;

  return <img src={src} alt={"icon"} className="w-[10px] h-[4px]" />;
};
