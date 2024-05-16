import { PROFICIENCY_STATUS } from "../../types";

export const getProficiencyLevel = (skillLevel: number) => {
  if (skillLevel === 0) {
    return PROFICIENCY_STATUS.NOT_PROFICIENT;
  }

  if (skillLevel === 0.5) {
    return PROFICIENCY_STATUS.HALF_PROFICIENT;
  }

  if (skillLevel === 1) {
    return PROFICIENCY_STATUS.PROFICIENT;
  }

  return PROFICIENCY_STATUS.EXPERTISE;
};
