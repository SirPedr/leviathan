export enum PROFICIENCY_STATUS {
  NOT_PROFICIENT = "NOT_PROFICIENT",
  HALF_PROFICIENT = "HALF_PROFICIENT",
  PROFICIENT = "PROFICIENT",
  EXPERTISE = "EXPERTISE",
}

export type SkillNames =
  | "athletics"
  | "acrobatics"
  | "sleightOfHand"
  | "stealth"
  | "arcana"
  | "history"
  | "investigation"
  | "nature"
  | "religion"
  | "animalHandling"
  | "insight"
  | "medicine"
  | "perception"
  | "survival"
  | "deception"
  | "intimidation"
  | "performance"
  | "persuasion";

export type CharacterSkills = Record<
  SkillNames,
  {
    modifier: number;
    proficiency: PROFICIENCY_STATUS;
  }
>;
