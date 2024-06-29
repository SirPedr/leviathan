import { removeRedundantSpaces } from "../../../../helpers/removeRedundantSpaces";
import { SpellItem } from "../../../../types/items";

export const parseSpellTarget = (target: SpellItem["system"]["target"]) =>
  removeRedundantSpaces(
    `${target.value} ${target.units} ${target.type}`
  ).trim();
