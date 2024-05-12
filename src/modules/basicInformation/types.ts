export type CharacterClass = {
  name: string;
  level: number;
};

export type CharacterBasicInfo = {
  name: string;
  hp: number;
  armorClass: number;
  totalLevel: number;
  classes: Array<{
    name: string;
    level: number;
  }>;
};
