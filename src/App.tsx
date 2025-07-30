import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  ThemeProvider,
  createTheme,
  // useColorScheme,
} from "@mui/material/styles";

import Header from "./components/Header";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme} defaultMode="dark" noSsr>
        <CssBaseline />
        <Container maxWidth="md">
          <Header />
          <Box sx={{ height: "100vh" }} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
