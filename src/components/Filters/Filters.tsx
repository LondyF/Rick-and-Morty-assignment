import React from "react";
import { Button, Popover, Stack, styled } from "@mui/material";
import MultiSelectFilter from "./SelectFilter";
import { CHARACTER_GENDERS, CHARACTER_STATUSES } from "../../consts";
import { useFilters, FilterState } from "../../contexts/filters";
import SearchFilter from "./SearchFilter";

const Separator = styled("div")({
  height: "1px",
  background: `linear-gradient(270deg, rgba(230, 229, 235, 0) 0%, #E6E5EB 51.56%, rgba(230, 229, 235, 0) 100%)`,
});

const StyledPopover = styled(Popover)({
  ".MuiPopover-paper": {
    width: "300px",
    maxWidth: "none",
  },
});

const Filters = () => {
  const { filters: filtersFromStore, setFilters: setStoredFilters } =
    useFilters();

  const [filters, setFilters] = React.useState(filtersFromStore);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "filter-popover" : undefined;

  const setFilter = <T extends keyof FilterState>(
    filter: T,
    value: FilterState[T]
  ) => {
    setFilters((filters) => ({
      ...filters,
      [filter]: value,
    }));
  };

  const handleSaveStoredFilters = () => {
    setFilters(filters);
    setStoredFilters(filters);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleClick}>Filters</Button>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack spacing={2.5} p={2}>
          <MultiSelectFilter
            label="Character Gender"
            options={CHARACTER_GENDERS}
            selectedFilter={filters.gender}
            onSelectedFilterChange={(value) => setFilter("gender", value)}
          />
          <Separator />
          <MultiSelectFilter
            label="Character Status"
            options={CHARACTER_STATUSES}
            selectedFilter={filters.status}
            onSelectedFilterChange={(value) => setFilter("status", value)}
          />

          <Separator />
          <SearchFilter
            label="Character Species"
            filterValue={filters.species}
            onFilterValueChange={(value) => setFilter("species", value)}
          />
          <Button
            variant="contained"
            onClick={handleSaveStoredFilters}
            fullWidth
          >
            Apply
          </Button>
        </Stack>
      </StyledPopover>
    </div>
  );
};

export default Filters;
