import React, { useEffect, useState } from "react";
import { MainLayout } from "../components/layout/mainLayout/mainLayout.component";
import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { MetricsRepository } from "../../../domain/metric/metric.repository";
import { TwoPanelLayout } from "../components/layout/mainLayout/twoPanelLayout.component";
import { dateRepository } from "../../../domain/metric/objectValues/date/date.service";

const Form = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      value: "",
    },
  });

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

const MetricsTimeline = ({ data = [] }) => {
  return (
    <Timeline>
      {data.map((metric, i, array) => (
        <TimelineItem key={metric.id}>
          <TimelineOppositeContent color="text.secondary">
            {dateRepository.getFormatedDataFromTimestamp(metric.timestamp)}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {i <= array.length - 2 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>{metric.value}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export const DashboardView = () => {
  const [metrics, setMetrics] = useState([]);

  const handleSubmit = (data) => {
    MetricsRepository.saveMetric({ data })
      .then((metric) =>
        setMetrics((previousValue) => [...previousValue, metric])
      )
      .catch();
  };

  useEffect(() => {
    MetricsRepository.fetchMetrics().then((metrics) =>
      setMetrics(metrics || [])
    );
  }, []);

  return (
    <MainLayout>
      <TwoPanelLayout
        leftContent={<Form onSubmit={handleSubmit}></Form>}
        rightContent={<MetricsTimeline data={metrics}></MetricsTimeline>}
      ></TwoPanelLayout>
    </MainLayout>
  );
};
