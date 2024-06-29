import { SPELL_GROUP_ORDER } from "../../consts/spellDisplay.const";

export const sortByDisplayPriority = (first: string, second: string) =>
  SPELL_GROUP_ORDER.indexOf(first) - SPELL_GROUP_ORDER.indexOf(second);
