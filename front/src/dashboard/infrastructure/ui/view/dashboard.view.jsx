import React, { useEffect, useState } from "react";
import { MainLayout } from "../components/layout/mainLayout/mainLayout.component";
import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/system";
import {
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
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
import { getAverageMetricsUseCase } from "../../../application/getAverageMetrics.usecase";

const MetricsAverageTable = ({ metricsAverage }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">last minute</TableCell>
            <TableCell align="center">last hour</TableCell>
            <TableCell align="center">last day</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell align="center">
              {metricsAverage.lastMinuteMetricsAverage}
            </TableCell>
            <TableCell align="center">
              {metricsAverage.lastHourMetricsAverage}
            </TableCell>
            <TableCell align="center">
              {metricsAverage.lastDayMetricsAverage}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

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
            <TextField
              sx={{ my: "0.3rem" }}
              label="value (just a number)"
              {...field}
            />
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
          <TimelineContent>
            <Typography>name: {metric.name}</Typography>
            <Typography>value: {metric.value}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export const DashboardView = () => {
  const initialMetricsAverageObject = {
    lastMinuteMetricsAverage: 0,
    lastHourMetricsAverage: 0,
    lastDayMetricsAverage: 0,
  };
  const [metricsAverage, setMetricsAverage] = useState(
    initialMetricsAverageObject
  );
  const [metrics, setMetrics] = useState([]);

  const handleSubmit = (data) => {
    MetricsRepository.saveMetric({ data })
      .then((metric) =>
        setMetrics((previousValue) => [...previousValue, metric])
      )
      .catch();
  };

  useEffect(() => {
    getAverageMetricsUseCase().then((metricsAverageFromServer) =>
      setMetricsAverage(metricsAverageFromServer || initialMetricsAverageObject)
    );
  }, [metrics.length]);

  useEffect(() => {
    MetricsRepository.fetchMetrics().then((metrics) =>
      setMetrics(metrics || [])
    );
  }, []);

  return (
    <MainLayout>
      <TwoPanelLayout
        leftContent={
          <>
            <Form onSubmit={handleSubmit}></Form>
            <Divider sx={{ my: "3rem" }}></Divider>
            <Typography variant="h6">Metrics Average</Typography>
            <MetricsAverageTable
              metricsAverage={metricsAverage}
            ></MetricsAverageTable>
          </>
        }
        rightContent={<MetricsTimeline data={metrics}></MetricsTimeline>}
      ></TwoPanelLayout>
    </MainLayout>
  );
};
