import { Spell } from "../types";

export const SPELL_GROUP_NAMES: Record<string, string> = {
  pact: "Pact Magic",
  innate: "Innate Spellcasting",
  atwill: "At-Will",
  0: "Cantrips",
  1: "1st Level",
  2: "2nd Level",
  3: "3rd Level",
  4: "4th Level",
  5: "5th Level",
  6: "6th Level",
  7: "7th Level",
  8: "8th Level",
  9: "9th Level",
};

export const SPELL_GROUP_ORDER = [
  "atwill",
  "innate",
  "pact",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

export const SPELL_BADGES_KEYS: Array<keyof Spell> = [
  "castingTime",
  "target",
  "range",
];
