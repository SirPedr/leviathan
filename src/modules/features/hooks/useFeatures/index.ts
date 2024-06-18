import { useMemo } from "react";
import { CharacterSheet } from "../../../../types/characterSheet";
import { useBasicCharacterInformation } from "../../../basicInformation/hooks/useBasicCharacterInformation/useBasicCharacterInformation";
import { adaptFeature } from "../../helpers/adaptFeature";
import { groupFeatures } from "../../helpers/groupFeatures";
import { isItemAFeature } from "../../helpers/isItemAFeature";
import { CharacterFeatureGroup } from "../../types";

export const useFeatures = (
  character: CharacterSheet
): CharacterFeatureGroup => {
  const { totalLevel } = useBasicCharacterInformation(character);

  const feats = useMemo(
    () =>
      character.items
        .filter(isItemAFeature)
        .map((feat) => adaptFeature(feat, totalLevel)),
    [totalLevel, character]
  );

  const groupedFeatures = groupFeatures(feats);

  console.log(groupedFeatures);

  return groupedFeatures;
};
