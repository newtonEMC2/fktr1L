export const Metric = ({ name, value, id, timestamp }) => {
  return Object.freeze({
    id,
    name,
    value,
    timestamp,
  });
};
