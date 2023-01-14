import { createTheme } from "@mui/material/styles";
import { normalize } from "./normalize";

// A custom theme for this app
export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: normalize,
    },
  },
});
