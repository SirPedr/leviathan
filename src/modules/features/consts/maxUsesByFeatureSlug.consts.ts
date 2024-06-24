import { CharacterBasicInfo } from "../../basicInformation/types";
import { calculateMaxUsesForKi } from "../helpers/calculateMaxUsesFor/ki";
import { calculateMaxUsesForRage } from "../helpers/calculateMaxUsesFor/rage";

export const MAX_USES_BY_FEATURE_SLUG: Record<
  string,
  (character: CharacterBasicInfo) => number
> = {
  ki: calculateMaxUsesForKi,
  rage: calculateMaxUsesForRage,
};
