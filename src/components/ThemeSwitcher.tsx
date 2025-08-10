import IconButton from "@mui/material/IconButton";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeSwitcher() {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  const handleClick = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <IconButton color="inherit" id="basic-button" onClick={handleClick}>
      {mode === "dark" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}
