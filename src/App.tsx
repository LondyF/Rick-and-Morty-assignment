import React from "react";
import {
  Container,
  CssBaseline,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CharactersList from "./components/Character/CharactersList";
import SearchBar from "./components/SearchBar/SearchBar";
import { FiltersProvider } from "./contexts/filters";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <FiltersProvider>
          <CssBaseline />
          <Container maxWidth="md">
            <Stack gap={3}>
              <SearchBar />
              <CharactersList />
            </Stack>
          </Container>
        </FiltersProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
