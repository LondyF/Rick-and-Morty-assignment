import React from "react";
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
    isFetching,
  } = useCharactersQuery(filters);

  const allCharacters = React.useMemo(
    () => characters?.pages.flatMap((page) => page.results),
    [characters]
  );

  if (isFetching && !allCharacters) {
    return <span>loading..</span>;
  }

  if (!allCharacters) {
    return <span>no characters found</span>;
  }

  return (
    <InfiniteScroll
      next={fetchNextPage}
      hasMore={hasNextPage}
      dataLength={allCharacters?.length ?? 0}
      loader={<span>loading..</span>}
    >
      <Grid sx={{ overflow: "hidden" }} container spacing={5} rowSpacing={5}>
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
