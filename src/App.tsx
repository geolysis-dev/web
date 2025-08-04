import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { createBrowserRouter, RouterProvider } from "react-router";

import LegalPage from "./pages/legal-page";
import RootLayout from "./pages/root";
import ErrorPage from "./pages/error-page";
import TermsOfUsePage from "./pages/terms-of-use";
import PrivacyPolicyPage from "./pages/privacy-policy";
import HomePage from "./pages/home-page";
import ContactPage from "./pages/contact-page";

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
      { path: "contact", element: <ContactPage /> },
      { path: "excel/legal", element: <LegalPage /> },
      { path: "excel/legal/terms-of-use", element: <TermsOfUsePage /> },
      { path: "excel/legal/privacy-policy", element: <PrivacyPolicyPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme} defaultMode="dark" noSsr>
        <CssBaseline />
        <Container maxWidth="md">
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
