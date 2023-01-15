import { dateRepository } from "./objectValues/date/date.service";
import { generateUuidRepository } from "./objectValues/uuid/uuid.service";

export const ServiceMetric = {
  createMetric: ({ name, value }) => {
    if (!value) throw new Error();
    if (isNaN(Number(value))) throw new Error();
    return {
      name,
      value,
      timestamp: dateRepository.ISOStringDateTimestamp(),
      id: generateUuidRepository.generateUid(),
    };
  },
};
