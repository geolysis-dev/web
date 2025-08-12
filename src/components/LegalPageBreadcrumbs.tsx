import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router";

import Link from "./CustomLink";
import PATHS from "../utils/paths";
import React, { useState } from "react";

export default function LegalPageBreadcrumbs({
  pathSlug,
}: {
  pathSlug: string;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    setAnchorEl(null);
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to={PATHS.LEGAL.ROOT} underline="hover" color="inherit">
        legal
      </Link>
      <Typography
        sx={{
          color: "text.primary",
          cursor: "pointer",
          "&:hover": { textDecoration: "underline" },
        }}
        onClick={handleClick}
        aria-controls={open ? "privacy-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {pathSlug}
      </Typography>
      <Menu
        id="privacy-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        slotProps={{ list: { "aria-labelledby": "privacy-menu" } }}
      >
        <MenuItem onClick={() => handleMenuItemClick(PATHS.LEGAL.TERMS_OF_USE)}>
          terms
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick(PATHS.LEGAL.PRIVACY_POLICY)}
        >
          privacy
        </MenuItem>
      </Menu>
    </Breadcrumbs>
  );
}
