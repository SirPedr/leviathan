import { cleanDirtyText } from "../../../../helpers/cleanDirtyText";
import { parseActivationCost } from "../../../../helpers/parseFeatureCost";
import { SpellItem } from "../../../../types/items";
import { Spell } from "../../types";
import { getSpellLevelGroup } from "../getSpellLevelGroup";
import { parseSpellRange } from "../parseSpellRange";
import { parseSpellTarget } from "../parseSpellTarget";

export const adaptSpell = (spell: SpellItem): Spell => ({
  name: spell.name,
  description: cleanDirtyText(spell.system.description.value),
  prepared: spell.system.preparation.prepared,
  castingTime: parseActivationCost(spell.system.activation) ?? "",
  group: getSpellLevelGroup(spell),
  target: parseSpellTarget(spell.system.target.affects),
  range: parseSpellRange(spell.system.range),
});
