import { Grid } from "@mui/material";
import useCharactersQuery from "../../hooks/use-characters-query";
import { useFilters } from "../../contexts/filters";

import CharacterCard from "./CharacterCard";

const CharactersList = () => {
  const { filters } = useFilters();

  const { data: characters } = useCharactersQuery(filters);

  return (
    <Grid container spacing={5} rowSpacing={5}>
      {characters?.results.map((character) => (
        <Grid item md={4} key={character.id}>
          <CharacterCard {...character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharactersList;
