import { RawSheet } from "../../../../types/rawSheet";
import { useBasicCharacterInfoContext } from "../../../basicInformation/hooks/useCharacterBasicInfoContext";
import { parseSkills } from "../../helpers/parseSkills";
import { CharacterSkills } from "../../types";

export const useSkills = (character: RawSheet): CharacterSkills => {
  const { proficiencyBonus } = useBasicCharacterInfoContext();

  const parsedSkills = parseSkills(
    proficiencyBonus,
    character.system.skills,
    character.system.abilities
  );

  return parsedSkills;
};
