import { TextField } from "@mui/material";

import { useFilters } from "../../contexts/filters";
import { useDebounce } from "../../hooks/use-debounce";

const DEBOUNCE_DELAY = 1000;

const SearchBar = () => {
  const { setNameFilter } = useFilters();

  const handleNameFilterChange = useDebounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNameFilter(e.target.value.toLowerCase().trim());
    },
    DEBOUNCE_DELAY
  );

  return (
    <div>
      <TextField
        onChange={handleNameFilterChange}
        fullWidth
        type="text"
        placeholder="Search..."
        label="Character name"
      />
    </div>
  );
};

export default SearchBar;
