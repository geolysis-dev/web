import SvgIcon from "@mui/icons-material/Menu";

import logo from "../assets/logo.svg?react";

export default function Logo() {
  return (
    <SvgIcon
      component={logo}
      sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
      inheritViewBox
    />
  );
}
