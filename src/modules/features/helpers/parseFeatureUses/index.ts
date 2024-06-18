import { FeatItem } from "../../../../types/items";
import { CharacterFeatures } from "../../types";

export const parseFeatureUses = (
  uses: FeatItem["system"]["uses"],
  proficiencyBonus: number
): CharacterFeatures["uses"] => {
  if (!uses.value) {
    return null;
  }

  return {
    current: parseInt(uses.value, 10),
    max: uses.max === "@prof" ? proficiencyBonus : parseInt(uses.max, 10),
  };
};
