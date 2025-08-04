import * as React from "react";
import Box from "@mui/material/Box";

type Props = {
  children: React.ReactNode;
};

export default function CustomBox({ children }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: 5,
      }}
    >
      <Box maxWidth="sm">{children}</Box>
    </Box>
  );
}
