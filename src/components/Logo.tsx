import SvgIcon from "@mui/icons-material/Menu";

import type { SvgIconProps } from "@mui/material/SvgIcon";

import logo from "../assets/logo.svg?react";

export default function Logo({ ...props }: SvgIconProps) {
  return <SvgIcon component={logo} {...props} inheritViewBox />;
}
