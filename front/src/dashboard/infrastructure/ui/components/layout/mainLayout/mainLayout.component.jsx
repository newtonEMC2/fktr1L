import React from "react";
import Box from "@mui/material/Box";
import { Header } from "../../header/appHeader/appHeader.component";
import { AppFooter } from "../../footer/appFooter.component";
import { f_px1 } from "../../../../../../shared/infrastructure/ui/styles/gutter";

export const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "auto 1fr auto",
        gridTemplateAreas: `
                  "header header"
                  "content content"
                  "footer footer"
                  `,
        gridGap: "0.5rem",
        height: "100%",
      }}
    >
      <Box sx={{ gridArea: "header" }}>
        <Header></Header>
      </Box>
      <Box sx={{ gridArea: "content", px: f_px1 }}>content</Box>
      <Box sx={{ gridArea: "footer" }}>
        <AppFooter></AppFooter>
      </Box>
    </Box>
  );
};
