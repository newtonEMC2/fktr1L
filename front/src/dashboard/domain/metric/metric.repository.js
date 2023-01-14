import { MetricsRepositoryImplementation } from "../../infrastructure/http/repository/metricsRepositoryImplementation";

export const MetricsRepository = {
  saveMetric: ({ data }) =>
    MetricsRepositoryImplementation.saveMetric({ data }),
};
