import { Paper, Typography } from "@mui/material";
import React from "react";
import { f_px1 } from "../../../../../shared/infrastructure/ui/styles/gutter";

export const AppFooter = () => {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "space-between",
        px: f_px1,
      }}
    >
      <Typography variant="subtitle2">fTr1a1</Typography>
      <Typography variant="subtitle2">2023</Typography>
    </Paper>
  );
};
