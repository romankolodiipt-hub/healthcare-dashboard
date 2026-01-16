interface PatientCardFieldProps {
  title: string;
  iconSrc: string;
  value: string;
}

export const PatientCardField: React.FC<PatientCardFieldProps> = ({
  title,
  iconSrc,
  value,
}) => {
  return (
    <div className="flex items-center gap-4">
      <img src={iconSrc} alt="No icon" className="w-[40px] h-[40px]" />
      <div className="flex flex-col gap-1">
        <p className="body-regular-14">{title}</p>
        <p className="body-emphasized-14pt">{value}</p>
      </div>
    </div>
  );
};
