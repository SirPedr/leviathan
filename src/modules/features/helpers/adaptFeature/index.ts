import { FeatItem } from "../../../../types/items";
import { CharacterBasicInfo } from "../../../basicInformation/types";
import { CharacterFeatures } from "../../types";
import { getFeatureID } from "../getFeatureID";
import { parseFeatureCost } from "../parseFeatureCost";
import { cleanDirtyText } from "../../../../helpers/cleanDirtyText";
import { parseFeatureRecovery } from "../parseFeatureRecovery";
import { parseFeatureUses } from "../parseFeatureUses";

export const adaptFeature = (
  feature: FeatItem,
  character: CharacterBasicInfo
): CharacterFeatures => ({
  id: getFeatureID(feature.name),
  name: feature.name,
  type: (feature.flags.plutonium ?? feature.flags.srd5e)?.page ?? "other",
  description: cleanDirtyText(feature.system.description.value),
  uses: parseFeatureUses(feature, character),
  usageCost: parseFeatureCost(feature.system.activation),
  recoveryAt: parseFeatureRecovery(feature.system.uses),
});
