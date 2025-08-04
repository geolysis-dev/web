import List from "@mui/material/List";
import CustomBox from "../components/CustomBox";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

import Box from "@mui/material/Box";

export default function ContactPage() {
  return (
    <CustomBox>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Contact
      </Typography>
      <Box
        display="grid"
        gap={4}
        gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            Contact Us
          </Typography>

          <Typography variant="body1">Send us an email </Typography>

          <Link
            href="mailto:support@geolysis.io"
            target="_blank"
            rel="noopener noreferrer"
            underline="always"
          >
            support@geolysis.io
          </Link>

          <Typography variant="body2" color="text.secondary">
            We'll get back to you within 24 hours.
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            p: 3,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Office Location
          </Typography>

          <Typography
            component="div"
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: 1 }}
          >
            Geolysis LLC
          </Typography>

          <List
            disablePadding
            sx={{
              listStyleType: "disc",
              pl: 3,
            }}
          >
            {[
              "3500 Oak Lawn Ave.",
              "Suite 460A PMB 1244",
              "Dallas",
              "TX 75219",
            ].map((line, i) => (
              <ListItem key={i} sx={{ display: "list-item", pl: 0, py: 0.5 }}>
                <ListItemText primary={line} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </CustomBox>
  );
}
