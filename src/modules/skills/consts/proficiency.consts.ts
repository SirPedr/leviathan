import {
  IconCheck,
  IconChecks,
  IconMath1Divide2,
  IconMinus,
} from "@tabler/icons-react";
import { PROFICIENCY_STATUS } from "../types";

export const PROFICIENCY_ICONS = {
  [PROFICIENCY_STATUS.NOT_PROFICIENT]: IconMinus,
  [PROFICIENCY_STATUS.HALF_PROFICIENT]: IconMath1Divide2,
  [PROFICIENCY_STATUS.PROFICIENT]: IconCheck,
  [PROFICIENCY_STATUS.EXPERTISE]: IconChecks,
};

export const PROFICIENCY_DISPLAY_NAME = {
  [PROFICIENCY_STATUS.NOT_PROFICIENT]: "Not proficient",
  [PROFICIENCY_STATUS.HALF_PROFICIENT]: "Half proficient",
  [PROFICIENCY_STATUS.PROFICIENT]: "Proficient",
  [PROFICIENCY_STATUS.EXPERTISE]: "Expertise",
};
