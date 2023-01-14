import { generateUuidRepository } from "./objectValues/uuid/uuid.service";

export const ServiceMetric = {
  createMetric: ({ name, value }) => {
    return {
      name,
      value,
      timestamp: Date.now(),
      id: generateUuidRepository.generateUid(),
    };
  },
};
