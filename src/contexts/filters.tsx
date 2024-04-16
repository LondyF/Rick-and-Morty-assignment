import React from "react";

import { CharacterGender, CharacterStatus } from "../types";

export type FilterState = {
  name?: string;
  species?: string;
  status?: CharacterStatus;
  gender?: CharacterGender;
};

type FilterContext = {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
};

const FiltersContext = React.createContext<FilterContext>({
  filters: {},
  setFilters: () => {},
});

export const FiltersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filters, setFilters] = React.useState<FilterState>({});

  const setFiltersFn = (updatedFilters: Partial<FilterState>) =>
    setFilters((prev) => ({ ...prev, ...updatedFilters }));

  return (
    <FiltersContext.Provider
      value={{
        setFilters: setFiltersFn,
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
