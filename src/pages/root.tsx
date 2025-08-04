import { Outlet } from "react-router";
import { Box } from "@mui/material";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
