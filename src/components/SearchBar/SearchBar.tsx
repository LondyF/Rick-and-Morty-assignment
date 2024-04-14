import { TextField } from "@mui/material";

import { useFilters } from "../../contexts/filters";
import { useDebounce } from "../../hooks/use-debounce";
import { DEBOUNCE_DELAY } from "../../config";

const SearchBar = () => {
  const { setNameFilter } = useFilters();

  const handleNameFilterChange = useDebounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNameFilter(e.target.value.toLowerCase().trim());
    },
    DEBOUNCE_DELAY
  );

  return (
    <TextField
      onChange={handleNameFilterChange}
      fullWidth
      type="text"
      placeholder="Search..."
      label="Character name"
    />
  );
};

export default SearchBar;
