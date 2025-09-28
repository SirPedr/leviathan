export type CharacterClass = {
  name: string;
  level: number;
  subclass?: string;
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
    subclass?: string;
  }>;
  modifiers: Record<string, number>;
};
