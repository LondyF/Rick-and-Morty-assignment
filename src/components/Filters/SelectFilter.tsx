import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props<T extends readonly string[]> = {
  options: T;
  selectedFilter: T[number] | undefined;
  label: string;
  onSelectedFilterChange: (selectedFilters: T[number]) => void;
};

const MultiSelectFilter = <T extends readonly string[]>({
  options,
  selectedFilter,
  label,
  onSelectedFilterChange,
}: Props<T>) => {
  const handleChange = (event: SelectChangeEvent<T[number]>) => {
    const {
      target: { value },
    } = event;
    onSelectedFilterChange(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={selectedFilter ?? ""}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelectFilter;
