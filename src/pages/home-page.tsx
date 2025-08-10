import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

import { PROJECTS } from "../utils/projects-description";

type ProjectProp = {
  name: string;
  description: string;
  link: string;
  icon: React.ElementType;
};

const ProjectCard = ({ name, description, link, icon }: ProjectProp) => {
  const Icon = icon;

  return (
    <Card
      sx={{
        maxWidth: 400,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom sx={{ mt: 2, fontSize: 20 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>

      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Chip
            component="a"
            variant="outlined"
            href={link || undefined}
            target={link && "_blank"}
            clickable={Boolean(link)}
            label={link ? "Learn More" : "In active development"}
            color={link ? "primary" : "default"}
          />
          <Icon sx={{ alignSelf: "center", fontSize: 24 }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        pt: 5,
      }}
      maxWidth="md"
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center" // keeps grid centered at all times
      >
        {PROJECTS.map(({ name, description, link, icon }, idx) => (
          <Grid
            size={6}
            key={idx}
            sx={{
              display: "flex",
              justifyContent: "center", // center card within its cell
            }}
          >
            <ProjectCard
              name={name}
              description={description}
              link={link}
              icon={icon}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
