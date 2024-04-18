import { Grid } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

import useCharactersQuery from "../../hooks/use-characters-query";
import { useFilters } from "../../contexts/filters";

import CharacterCard from "./CharacterCard";

const CharactersList = () => {
  const { filters } = useFilters();

  const {
    data: characters,
    hasNextPage,
    fetchNextPage,
  } = useCharactersQuery(filters);

  const allCharacters = characters?.pages.flatMap((page) => page.results);

  return (
    <InfiniteScroll
      next={fetchNextPage}
      hasMore={hasNextPage}
      dataLength={allCharacters?.length ?? 0}
      loader={<span>loading..</span>}
    >
      <Grid id="ok" container spacing={5} rowSpacing={5}>
        {allCharacters?.map((character) => (
          <Grid item md={4} key={character.id}>
            <CharacterCard {...character} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default CharactersList;
