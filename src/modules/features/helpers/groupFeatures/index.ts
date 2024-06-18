import { FEAT_TYPE_TO_GROUP_NAME } from "../../consts/featureGroups.consts";
import { CharacterFeatureGroup, CharacterFeatures } from "../../types";

export const groupFeatures = (features: CharacterFeatures[]) =>
  features.reduce((groupedFeatures, feat) => {
    const groupName = FEAT_TYPE_TO_GROUP_NAME[feat.type] ?? "otherFeatures";

    if (!groupedFeatures[groupName]) {
      groupedFeatures[groupName] = [feat];
    } else {
      groupedFeatures[groupName].push(feat);
    }

    return groupedFeatures;
  }, {} as CharacterFeatureGroup);
