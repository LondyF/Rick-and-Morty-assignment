import React from "react";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CharactersList from "./components/Character/CharactersList";

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
        <CssBaseline />
        <Container maxWidth="md">
          <CharactersList />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
