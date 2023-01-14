import React from "react";
import Box from "@mui/material/Box";

export const TwoPanelLayout = ({ leftContent, rightContent }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "1fr",
        gridTemplateAreas: `
                  "leftcontent rightcontent"
                  `,
        gridGap: "0.5rem",
        height: "100%",
      }}
    >
      <Box sx={{ gridArea: "leftcontent" }}>{leftContent}</Box>
      <Box sx={{ gridArea: "rightcontent" }}>{rightContent}</Box>
    </Box>
  );
};
