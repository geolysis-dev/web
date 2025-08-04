import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useColorScheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

export default function ThemeSwitcher() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(prefersDarkMode);
  const { mode, setMode } = useColorScheme();

  React.useEffect(() => {
    setMode(isDarkMode ? "dark" : "light");
  }, [isDarkMode, setMode]);

  if (!mode) return null;

  const handleThemeChange = () => {
    setIsDarkMode((prevIsDarkMode) => {
      return !prevIsDarkMode;
    });
  };

  return (
    <IconButton onClick={handleThemeChange} color="inherit">
      {isDarkMode ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}
