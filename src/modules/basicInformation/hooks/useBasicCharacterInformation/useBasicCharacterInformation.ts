import { CharacterSheet } from "../../../../types/characterSheet";
import { getClassList } from "../../helpers/getClassList";
import { getTotalCharacterLevel } from "../../helpers/getTotalCharacterLevel";
import { CharacterBasicInfo } from "../../types";

export const useBasicCharacterInformation = (
  sheet: CharacterSheet
): CharacterBasicInfo => {
  const classes = getClassList(sheet);

  return {
    name: sheet.name,
    hp: sheet.system.attributes.hp.max,
    armorClass: 10,
    totalLevel: getTotalCharacterLevel(classes),
    classes,
  };
};
