import { get, post } from "../../../../shared/infrastructure/http/httpClient";
import { ServiceMetric } from "../../../domain/metric/metric.service";
import { metricsDTO } from "./metrics.dto";

export const MetricsRepositoryImplementation = {
  saveMetric: ({ data }) => {
    const metricDomainInstance = ServiceMetric.createMetric({
      name: data.name,
      value: data.value,
    });
    return post({
      url: `http://localhost:3001/metrics`,
      data: JSON.stringify(metricsDTO.toExternalInstance(metricDomainInstance)),
    })
      .then(() => metricDomainInstance)
      .catch();
  },

  fetchMetrics: () => {
    return get({ url: "http://localhost:3001/metrics" })
      .then((res) => res.json())
      .catch();
  },

  fetchMetricsByDate: ({ gte_date }) => {
    return get({
      url: `http://localhost:3001/metrics?timestamp_gte=${gte_date}`,
    })
      .then((res) => res.json())
      .catch();
  },
};
