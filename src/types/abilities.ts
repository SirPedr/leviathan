export type AbilitiesIDs = "str" | "dex" | "con" | "int" | "wis" | "cha";
type AbilityData = {
  value: number;
  proficient: number;
  max: null;
  bonuses: {
    check: string;
    save: string;
  };
};

export type CharacterAbilities = Record<AbilitiesIDs, AbilityData>;
