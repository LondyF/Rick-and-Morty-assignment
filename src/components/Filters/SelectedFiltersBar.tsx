import React from "react";

import { Chip, Stack } from "@mui/material";

import { useFilters } from "../../contexts/filters";

const SelectedFiltersBar = () => {
  const { filters: storedFilters, updateFilters } = useFilters();

  const filters = React.useMemo(
    () =>
      Object.fromEntries(
        Object.entries(storedFilters).filter(([_, value]) => Boolean(value))
      ),
    [storedFilters]
  );

  const handleDeleteFilter = (filter: string) => {
    updateFilters({ [filter]: "" });
  };

  return (
    <Stack gap={1} direction="row">
      {Object.keys(filters).map((filter, idx) => (
        <Chip
          key={idx}
          label={`${filter}: ${filters[filter]}`}
          onDelete={() => handleDeleteFilter(filter)}
        />
      ))}
    </Stack>
  );
};

export default SelectedFiltersBar;
