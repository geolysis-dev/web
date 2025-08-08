import { LogoAI, LogoDKT, LogoPKG, LogoXLS } from "../components/Logo";

import { AIIcon, DesktopIcon, ExcelIcon, OpenSourceIcon } from "./icons";

export const PROJECTS = [
  {
    name: "Geolysis Python Pkg",
    description:
      "Open-source python package for geotechnical analysis and modeling.",
    link: "https://github.com/patrickboateng/geolysis",
    logo: LogoPKG,
    icon: OpenSourceIcon,
  },
  {
    name: "Geolysis for Excel",
    description:
      "Microsoft Excel addin that provides geotechnical functions (available) and data entry capabilities. (in development)",
    link: "",
    logo: LogoXLS,
    icon: ExcelIcon,
  },
  {
    name: "Geolysis for Desktop",
    description:
      "Desktop application for graphically modeling geotechnical simulation.",
    link: "",
    logo: LogoDKT,
    icon: DesktopIcon,
  },
  {
    name: "Geolysis AI",
    description:
      "Offers machine learning models that are trained using geotechnical data.",
    link: "",
    logo: LogoAI,
    icon: AIIcon,
  },
];
