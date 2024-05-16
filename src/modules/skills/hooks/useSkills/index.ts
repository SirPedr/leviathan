import { calculateProficiencyBonus } from "../../../../helpers/calculateProficiencyBonus";
import { CharacterSheet } from "../../../../types/characterSheet";
import { useBasicCharacterInformation } from "../../../basicInformation/hooks/useBasicCharacterInformation/useBasicCharacterInformation";
import { parseSkills } from "../../helpers/parseSkills";
import { CharacterSkills } from "../../types";

export const useSkills = (character: CharacterSheet): CharacterSkills => {
  const { totalLevel } = useBasicCharacterInformation(character);

  const proficiencyBonus = calculateProficiencyBonus(totalLevel);
  const parsedSkills = parseSkills(
    proficiencyBonus,
    character.system.skills,
    character.system.abilities
  );

  return parsedSkills;
};
