import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import PolicyRounded from "@mui/icons-material/PolicyRounded";

import { useLocation, useNavigate } from "react-router";

import CustomBox from "../components/CustomBox";

export default function LegalPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkItemClick = (subpage: string) => {
    navigate(`${location.pathname}/${subpage}`);
  };

  return (
    <CustomBox>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Terms & policies
      </Typography>
      <nav aria-label="main mailbox folders">
        <Typography variant="h5" component="h2" gutterBottom sx={{ pb: 2 }}>
          Legal
        </Typography>

        <List>
          <ListItem
            onClick={() => handleLinkItemClick("terms-of-use")}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <GavelRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Terms of Use"
                secondary="Rules and guidelines for accessing and using Geolysis for Excel"
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem
            onClick={() => handleLinkItemClick("privacy-policy")}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                <PolicyRounded />
              </ListItemIcon>
              <ListItemText
                primary="Privacy Policy"
                secondary="How we collect, use, and protect your personal data"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </CustomBox>
  );
}
