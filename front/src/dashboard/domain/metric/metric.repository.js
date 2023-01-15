import { MetricsRepositoryImplementation } from "../../infrastructure/http/repository/metricsRepositoryImplementation";

export const MetricsRepository = {
  saveMetric: ({ data }) =>
    MetricsRepositoryImplementation.saveMetric({ data }),
  fetchMetrics: () => MetricsRepositoryImplementation.fetchMetrics(),
  fetchMetricsByDate: ({ gte_date } = {}) =>
    MetricsRepositoryImplementation.fetchMetricsByDate({ gte_date }),
};
