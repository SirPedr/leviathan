import { CharacterBasicInfo } from "../../basicInformation/types";
import { calculateMaxUsesForBardicInspiration } from "../helpers/calculateMaxUsesFor/bardic-inspiration";
import { calculateMaxUsesForChannelDivinity } from "../helpers/calculateMaxUsesFor/channel-divinity";
import { calculateMaxUsesForEyesOfTheGrave } from "../helpers/calculateMaxUsesFor/eyes-of-the-grave";
import { calculateMaxUsesForKi } from "../helpers/calculateMaxUsesFor/ki";
import { calculateMaxUsesForMomentaryStasis } from "../helpers/calculateMaxUsesFor/momentary-stasis";
import { calculateMaxUsesForRage } from "../helpers/calculateMaxUsesFor/rage";
import { calculateMaxUsesForSentinelAtDeathsDoor } from "../helpers/calculateMaxUsesFor/sentinel-at-deaths-door";
import { calculateMaxUsesForSorceryPoints } from "../helpers/calculateMaxUsesFor/sorcery-points";

export const MAX_USES_BY_FEATURE_SLUG: Record<
  string,
  (character: CharacterBasicInfo) => number
> = {
  ki: calculateMaxUsesForKi,
  rage: calculateMaxUsesForRage,
  momentary_stasis: calculateMaxUsesForMomentaryStasis,
  sorcery_points: calculateMaxUsesForSorceryPoints,
  bardic_inspiration_d8: calculateMaxUsesForBardicInspiration,
  channel_divinity: calculateMaxUsesForChannelDivinity,
  eyes_of_the_grave: calculateMaxUsesForEyesOfTheGrave,
  sentinel_at_deaths_door: calculateMaxUsesForSentinelAtDeathsDoor,
};
