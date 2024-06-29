import { SpellItem } from "../../../../types/items";

const SPECIAL_GROUPS = ["innate", "atwill", "pact"];

export const getSpellLevelGroup = (spell: SpellItem) =>
  SPECIAL_GROUPS.includes(spell.system.preparation.mode)
    ? spell.system.preparation.mode
    : spell.system.level;
