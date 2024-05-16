import { AbilitiesIDs } from "./abilities";

export type SkillsIDs =
  | "acr"
  | "ani"
  | "arc"
  | "ath"
  | "dec"
  | "his"
  | "ins"
  | "itm"
  | "inv"
  | "med"
  | "nat"
  | "prc"
  | "prf"
  | "per"
  | "rel"
  | "slt"
  | "ste"
  | "sur";

type SkillData = {
  value: number;
  ability: AbilitiesIDs;
  bonuses: {
    check: string;
    passive: string;
  };
  roll: {
    min: null;
    max: null;
    mode: number;
  };
};

export type SheetSkills = Record<SkillsIDs, SkillData>;
