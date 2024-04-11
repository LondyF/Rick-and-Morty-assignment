import { Grid } from "@mui/material";
import useCharactersQuery from "../../hooks/use-characters-query";

import CharacterCard from "./CharacterCard";

const CharactersList = () => {
  const { data: characters } = useCharactersQuery({});

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
