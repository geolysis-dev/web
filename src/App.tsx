import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";

import { createBrowserRouter, RouterProvider } from "react-router";

import LegalPage from "./pages/legal-page";
import RootLayout from "./pages/root";
import ErrorPage from "./pages/error-page";
import TermsOfUsePage from "./pages/terms-of-use";
import PrivacyPolicyPage from "./pages/privacy-policy";
import HomePage from "./pages/home-page";
import ContactPage from "./pages/contact-page";
import PATHS from "./utils/paths";
import Box from "@mui/material/Box";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: PATHS.CONTACT, element: <ContactPage /> },
      { path: PATHS.LEGAL.ROOT, element: <LegalPage /> },
      { path: PATHS.LEGAL.TERMS_OF_USE, element: <TermsOfUsePage /> },
      { path: PATHS.LEGAL.PRIVACY_POLICY, element: <PrivacyPolicyPage /> },
    ],
  },
]);

interface Props {
  children?: React.ReactElement<unknown>;
}

function ScrollTop({ children }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, cursor: "pointer" }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme} defaultMode="dark" noSsr>
        <CssBaseline />
        <div id="back-to-top-anchor" />
        <Container maxWidth="md">
          <RouterProvider router={router} />
        </Container>
        <ScrollTop>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </>
  );
}

export default App;
