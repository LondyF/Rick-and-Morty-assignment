import React from "react";

import { CharacterGender, CharacterStatus } from "../types";

type FilterState = {
  name?: string;
  species?: string;
  status?: CharacterStatus;
  gender?: CharacterGender;
};

type FilterContext = {
  filters: FilterState;
  setNameFilter: (name: string) => void;
  setSpeciesFilter: (species: string) => void;
  setStatusFilter: (status: FilterState["status"]) => void;
  setGenderFilter: (gender: FilterState["gender"]) => void;
};

const FiltersContext = React.createContext<FilterContext>({
  filters: {},
  setNameFilter: () => {},
  setSpeciesFilter: () => {},
  setStatusFilter: () => {},
  setGenderFilter: () => {},
});

export const FiltersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filters, setFilters] = React.useState<FilterState>({});

  const setNameFilter = (name: string) =>
    setFilters((prev) => ({ ...prev, name }));

  const setSpeciesFilter = (species: string) =>
    setFilters((prev) => ({ ...prev, species }));

  const setStatusFilter = (status: FilterState["status"]) =>
    setFilters((prev) => ({ ...prev, status }));

  const setGenderFilter = (gender: FilterState["gender"]) =>
    setFilters((prev) => ({ ...prev, gender }));

  return (
    <FiltersContext.Provider
      value={{
        setNameFilter,
        setSpeciesFilter,
        setStatusFilter,
        setGenderFilter,
        filters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = React.useContext(FiltersContext);

  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  return context;
};
