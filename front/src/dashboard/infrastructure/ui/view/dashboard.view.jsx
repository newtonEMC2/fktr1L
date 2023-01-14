import React from "react";
import { MainLayout } from "../components/layout/mainLayout/mainLayout.component";

import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { MetricsRepository } from "../../../domain/metric/metric.repository";

const Form = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      value: "",
    },
  });
  const onSubmit = (data) => {
    MetricsRepository.saveMetric({ data });
  };
  return (
    <form style={{ color: "blue" }} onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          maxWidth: "500px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField sx={{ my: "0.3rem" }} label="name" {...field} />
          )}
        />
        <Controller
          name="value"
          control={control}
          render={({ field }) => (
            <TextField sx={{ my: "0.3rem" }} label="value" {...field} />
          )}
        />
        <Button
          sx={{ my: "0.3rem" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

export const DashboardView = () => {
  return (
    <MainLayout>
      <Form></Form>
    </MainLayout>
  );
};
