import { TextField } from "@mui/material";

import { useFilters } from "../../contexts/filters";
import { useDebounce } from "../../hooks/use-debounce";
import { DEBOUNCE_DELAY } from "../../config";
import React from "react";

const SearchBar = () => {
  const { updateFilters, filters } = useFilters();

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!filters.name) {
      inputRef.current!.value = "";
    }
  }, [filters.name]);

  const handleNameFilterChange = useDebounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateFilters({ name: e.target.value.toLowerCase().trim() });
    },
    DEBOUNCE_DELAY
  );

  return (
    <TextField
      inputRef={inputRef}
      onChange={handleNameFilterChange}
      fullWidth
      type="text"
      placeholder="Search..."
      label="Character name"
    />
  );
};

export default SearchBar;
