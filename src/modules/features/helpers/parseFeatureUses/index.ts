import { FeatItem } from "../../../../types/items";
import { CharacterBasicInfo } from "../../../basicInformation/types";
import { MAX_USES_BY_FEATURE_SLUG } from "../../consts/maxUsesByFeatureSlug.consts";
import { CharacterFeatures } from "../../types";
import { getFeatureID } from "../getFeatureID";

const getMaxUsesForFeature = (
  feature: FeatItem,
  character: CharacterBasicInfo
) => {
  const { uses } = feature.system;

  const parsed = parseInt(uses.max, 10);

  if (!isNaN(parsed)) {
    return parsed;
  }

  if (uses.max === "@prof") {
    return character.proficiencyBonus;
  }

  return MAX_USES_BY_FEATURE_SLUG[getFeatureID(feature.name)]?.(character) ?? 0;
};

export const parseFeatureUses = (
  feature: FeatItem,
  characterBasicInfo: CharacterBasicInfo
): CharacterFeatures["uses"] => {
  const { uses } = feature.system;

  if (!uses.value || !uses.max) {
    return null;
  }

  return {
    current: parseInt(uses.value, 10),
    max: getMaxUsesForFeature(feature, characterBasicInfo),
  };
};
