import {
  Box,
  Container,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import { GitHub, Email, LinkedIn } from "@mui/icons-material";

import Link from "./CustomLink";
import Logo from "./Logo";
import PATHS from "../utils/paths";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          {/* Left section */}

          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Logo />
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Geolysis LLC. All rights reserved.
            </Typography>
          </Stack>

          {/* Center section */}
          <Stack direction="row" spacing={2}>
            <Typography variant="body2" color="text.secondary">
              <Link
                to={PATHS.LEGAL.TERMS_OF_USE}
                underline="hover"
                color="text.secondary"
              >
                Terms
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link
                to={PATHS.LEGAL.PRIVACY_POLICY}
                underline="hover"
                color="text.secondary"
              >
                Privacy
              </Link>
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <Link to={PATHS.CONTACT} underline="hover" color="text.secondary">
                Contact
              </Link>
            </Typography>
          </Stack>

          {/* Right section (optional icons) */}
          <Stack direction="row" spacing={1}>
            <MuiLink href="mailto:support@geolysis.io" color="text.secondary">
              <Email fontSize="small" />
            </MuiLink>
            <MuiLink
              href="https://github.com/geolysis-dev"
              target="_blank"
              color="text.secondary"
            >
              <GitHub fontSize="small" />
            </MuiLink>
            <MuiLink
              href="https://linkedin.com/company/geolysis-llc"
              target="_blank"
              color="text.secondary"
            >
              <LinkedIn fontSize="small" />
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
