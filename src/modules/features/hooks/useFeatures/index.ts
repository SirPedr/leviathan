import { useMemo } from "react";
import { sortAlphabetically } from "../../../../helpers/sortAlphabetically";
import { useBasicCharacterInfoContext } from "../../../basicInformation/hooks/useCharacterBasicInfoContext";
import { RawSheet } from "../../../../types/rawSheet";
import { adaptFeature } from "../../helpers/adaptFeature";
import { groupFeatures } from "../../helpers/groupFeatures";
import { isItemAFeature } from "../../helpers/isItemAFeature";
import { CharacterFeatureGroup } from "../../types";

export const useFeatures = (rawSheet: RawSheet): CharacterFeatureGroup => {
  const characterBasicInfo = useBasicCharacterInfoContext();

  const feats = useMemo(
    () =>
      rawSheet.items
        .filter(isItemAFeature)
        .map((feat) => adaptFeature(feat, characterBasicInfo))
        .sort((first, second) => sortAlphabetically(first.name, second.name)),
    [characterBasicInfo, rawSheet]
  );

  const groupedFeatures = groupFeatures(feats);

  return groupedFeatures;
};
