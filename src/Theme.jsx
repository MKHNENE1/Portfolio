import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#121212",
      sides: "#0e0f0f",
      box: "#141514",
      test: "#bbbaa6",
      customText: {
        display: "inline-flex",
        backgroundImage:
          "linear-gradient(to right, rgba(187,186,166,1) 0%, rgba(255,252,211,1) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  },
  spacing: 8,
});

export default theme;
