export const metricsDTO = {
  toExternalInstance: (domainInstance) => ({
    id: domainInstance.id,
    name: domainInstance.name,
    value: domainInstance.value,
    timestamp: domainInstance.timestamp,
  }),
};
