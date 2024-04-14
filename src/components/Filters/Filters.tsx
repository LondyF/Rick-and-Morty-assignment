import React from "react";
import { Button, Popover, styled } from "@mui/material";
import MultiSelectFilter from "./SelectFilter";
import { CHARACTER_GENDERS, CHARACTER_STATUSES } from "../../consts";
import { useFilters } from "../../contexts/filters";
import SearchFilter from "./SearchFilter";

const Separator = styled("div")({
  height: "1px",
  background: `linear-gradient(270deg, rgba(230, 229, 235, 0) 0%, #E6E5EB 51.56%, rgba(230, 229, 235, 0) 100%)`,
});

const Filters = () => {
  const { filters, setGenderFilter, setStatusFilter, setSpeciesFilter } =
    useFilters();

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

  return (
    <div>
      <Button onClick={handleClick}>Filters</Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MultiSelectFilter
          options={CHARACTER_GENDERS}
          selectedFilter={filters.gender}
          onSelectedFilterChange={setGenderFilter}
        />
        <MultiSelectFilter
          options={CHARACTER_STATUSES}
          selectedFilter={filters.status}
          onSelectedFilterChange={setStatusFilter}
        />
        <SearchFilter
          filterValue={filters.species}
          onFilterValueChange={(value) => setSpeciesFilter(value)}
        />
        <Separator />
      </Popover>
    </div>
  );
};

export default Filters;
