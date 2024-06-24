import { calculateProficiencyBonus } from "../../../../helpers/calculateProficiencyBonus";
import { RawSheet } from "../../../../types/rawSheet";
import { getAbilityModifiers } from "../../helpers/getAbilityModifiers";
import { getClassList } from "../../helpers/getClassList";
import { getTotalCharacterLevel } from "../../helpers/getTotalCharacterLevel";
import { CharacterBasicInfo } from "../../types";

export const useBasicCharacterInformation = (
  sheet: RawSheet
): CharacterBasicInfo => {
  const classes = getClassList(sheet);
  const totalLevel = getTotalCharacterLevel(classes);

  return {
    name: sheet.name,
    hp: sheet.system.attributes.hp.max,
    armorClass: 10,
    proficiencyBonus: calculateProficiencyBonus(totalLevel),
    totalLevel,
    classes,
    modifiers: getAbilityModifiers(sheet.system.abilities),
  };
};
