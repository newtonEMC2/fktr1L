import { useState, useEffect, useMemo } from "react";
import { getAverageMetricsUseCase } from "../../application/getAverageMetrics.usecase";
import { MetricsRepository } from "../../domain/metric/metric.repository";

export const useMetricsViewModel = () => {
  const initialMetricsAverageObject = useMemo(
    () => ({
      lastMinuteMetricsAverage: 0,
      lastHourMetricsAverage: 0,
      lastDayMetricsAverage: 0,
    }),
    []
  );

  const [metricsAverage, setMetricsAverage] = useState(
    initialMetricsAverageObject
  );
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    getAverageMetricsUseCase().then((metricsAverageFromServer) =>
      setMetricsAverage(metricsAverageFromServer || initialMetricsAverageObject)
    );
  }, [metrics.length, setMetricsAverage, initialMetricsAverageObject]);

  useEffect(() => {
    MetricsRepository.fetchMetrics().then((metrics) =>
      setMetrics(metrics || [])
    );
  }, []);

  return {
    metricsAverage,
    metrics,
    setMetrics,
  };
};
