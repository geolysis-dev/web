import Header from "../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CustomBox from "../components/CustomBox";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <CustomBox>
        <Box>
          <Typography variant="h2" component="h1" gutterBottom>
            404
          </Typography>

          <Typography>Requested page not found / does not exist</Typography>
        </Box>
      </CustomBox>
    </>
  );
}
