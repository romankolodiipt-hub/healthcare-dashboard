import { SelectOption } from "../types/types";

interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  classes: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  classes = "",
}) => {
  return (
    <select
      aria-label="Select Range"
      className={classes}
      value={value}
      onChange={onChange}
    >
      {options.map(({ value, name }) => {
        return (
          <option key={value} value={value}>
            {name}
          </option>
        );
      })}
    </select>
  );
};
