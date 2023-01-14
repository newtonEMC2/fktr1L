export const dateRepository = {
  timestamp: () => Date.now(),
  getFormatedDataFromTimestamp: (timestamp) => new Date(timestamp).toString(),
};
