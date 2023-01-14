import { dateRepository } from "./objectValues/date/date.service";
import { generateUuidRepository } from "./objectValues/uuid/uuid.service";

export const ServiceMetric = {
  createMetric: ({ name, value }) => {
    return {
      name,
      value,
      timestamp: dateRepository.timestamp(),
      id: generateUuidRepository.generateUid(),
    };
  },
};
