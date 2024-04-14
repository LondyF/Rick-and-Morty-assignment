import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Props<T extends readonly string[]> = {
  options: T;
  selectedFilter: T[number] | undefined;
  onSelectedFilterChange: (selectedFilters: T[number]) => void;
};

const MultiSelectFilter = <T extends readonly string[]>({
  options,
  selectedFilter,
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
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedFilter}
        label="Age"
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
