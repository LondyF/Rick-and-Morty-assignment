import { Container, Stack, Typography } from "@mui/material";

import SearchBar from "./SearchBar/SearchBar";
import Filters from "./Filters/Filters";
import SelectedFiltersBar from "./Filters/SelectedFiltersBar";
import CharactersList from "./Character/CharactersList";

const Main = () => {
  return (
    <Container sx={{ paddingTop: 5 }} maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Rick and Morty Characters
      </Typography>
      <Stack gap={3}>
        <Stack display="flex" direction="row" gap={2} alignItems="center">
          <SearchBar />
          <Filters />
        </Stack>
        <SelectedFiltersBar />
        <CharactersList />
      </Stack>
    </Container>
  );
};

export default Main;
