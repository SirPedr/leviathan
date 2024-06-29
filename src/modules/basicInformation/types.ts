export type CharacterClass = {
  name: string;
  level: number;
};

export type CharacterBasicInfo = {
  name: string;
  hp: {
    current: number;
    max: number;
  };
  armorClass: number;
  totalLevel: number;
  proficiencyBonus: number;
  classes: Array<{
    name: string;
    level: number;
  }>;
  modifiers: Record<string, number>;
};
