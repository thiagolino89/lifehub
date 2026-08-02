import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#7b1fa2",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
  },

  shape: {
    borderRadius: 10,
  },

  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
  },
});