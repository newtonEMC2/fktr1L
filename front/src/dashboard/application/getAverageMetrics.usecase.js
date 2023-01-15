import { MetricsRepository } from "../domain/metric/metric.repository";
import { dateRepository } from "../domain/metric/objectValues/date/date.service";

const average = ({ metrics }) => {
  if (metrics.length === 0) return 0;
  const average =
    metrics.reduce((acc, current) => acc + parseFloat(current.value), 0) /
    metrics.length;
  return average;
};

export const getAverageMetricsUseCase = async () => {
  const [lastMinuteMetrics, lastHourMetrics, lastDayMetrics] =
    await Promise.all([
      MetricsRepository.fetchMetricsByDate({
        gte_date: dateRepository.getDateOneMinuteBeforeISOString(),
      }),
      MetricsRepository.fetchMetricsByDate({
        gte_date: dateRepository.getDateOneHourBeforeISOString(),
      }),
      MetricsRepository.fetchMetricsByDate({
        gte_date: dateRepository.getDateOneDayBeforeISOString(),
      }),
    ]);
  return {
    lastMinuteMetricsAverage: average({ metrics: lastMinuteMetrics }),
    lastHourMetricsAverage: average({ metrics: lastHourMetrics }),
    lastDayMetricsAverage: average({ metrics: lastDayMetrics }),
  };
};
