import { Link as MuiLink } from "@mui/material";
import type { LinkProps as MuiLinkProps } from "@mui/material";

import { Link as RouterLink } from "react-router";
import type { LinkProps as RouterLinkProps } from "react-router";

type CustomLinkProps = MuiLinkProps & RouterLinkProps;

export default function Link(props: CustomLinkProps) {
  return (
    <MuiLink
      component={RouterLink}
      underline="none"
      color="inherit"
      {...props}
    />
  );
}
