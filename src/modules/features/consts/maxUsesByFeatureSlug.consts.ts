import { CharacterBasicInfo } from "../../basicInformation/types";
import { calculateMaxUsesForKi } from "../helpers/calculateMaxUsesFor/ki";
import { calculateMaxUsesForMomentaryStasis } from "../helpers/calculateMaxUsesFor/momentary-stasis";
import { calculateMaxUsesForRage } from "../helpers/calculateMaxUsesFor/rage";
import { calculateMaxUsesForSorceryPoints } from "../helpers/calculateMaxUsesFor/sorcery-points";

export const MAX_USES_BY_FEATURE_SLUG: Record<
  string,
  (character: CharacterBasicInfo) => number
> = {
  ki: calculateMaxUsesForKi,
  rage: calculateMaxUsesForRage,
  momentary_stasis: calculateMaxUsesForMomentaryStasis,
  sorcery_points: calculateMaxUsesForSorceryPoints,
};
