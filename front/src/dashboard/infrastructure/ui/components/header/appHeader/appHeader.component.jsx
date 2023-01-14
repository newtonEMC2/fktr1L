import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { f_px1 } from "../../../../../../shared/infrastructure/ui/styles/gutter";

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar></Toolbar>
      <AppBar position="fixed">
        <Toolbar disableGutters sx={{ px: f_px1 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            fTr1a1
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
