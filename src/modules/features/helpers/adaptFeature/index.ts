import { calculateProficiencyBonus } from "../../../../helpers/calculateProficiencyBonus";
import { FeatItem } from "../../../../types/items";
import { CharacterFeatures } from "../../types";
import { parseFeatureCost } from "../parseFeatureCost";
import { parseFeatureDescription } from "../parseFeatureDescription";
import { parseFeatureRecovery } from "../parseFeatureRecovery";
import { parseFeatureUses } from "../parseFeatureUses";

export const adaptFeature = (
  feature: FeatItem,
  totalCharacterLevel: number
): CharacterFeatures => ({
  name: feature.name,
  type: (feature.flags.plutonium ?? feature.flags.srd5e)?.page ?? "other",
  description: parseFeatureDescription(feature.system.description.value),
  uses: parseFeatureUses(
    feature.system.uses,
    calculateProficiencyBonus(totalCharacterLevel)
  ),
  usageCost: parseFeatureCost(feature.system.activation),
  recoveryAt: parseFeatureRecovery(feature.system.uses),
});
