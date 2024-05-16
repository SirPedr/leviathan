import { calculateAbilityModifier } from "../../../../helpers/calculateAbilityModifier";
import { CharacterAbilities } from "../../../../types/abilities";
import { SheetSkills, SkillsIDs } from "../../../../types/skills";
import { SKILL_NAMES } from "../../consts/skillNames.consts";
import { CharacterSkills } from "../../types";
import { getProficiencyLevel } from "../getProficiencyLevel";

export const parseSkills = (
  proficiencyBonus: number,
  skills: SheetSkills,
  abilities: CharacterAbilities
): CharacterSkills =>
  Object.entries(skills).reduce((parsedSkills, skill) => {
    const [skillID, skillData] = skill;
    const skillName = SKILL_NAMES[skillID as SkillsIDs];
    const associatedAbility = abilities[skillData.ability];

    const modifier =
      calculateAbilityModifier(associatedAbility.value) +
      Math.floor(proficiencyBonus * skillData.value);

    return {
      ...parsedSkills,
      [skillName]: {
        modifier,
        proficiency: getProficiencyLevel(skillData.value),
      },
    };
  }, {} as CharacterSkills);
