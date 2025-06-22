import { removeRedundantSpaces } from "../../../../helpers/removeRedundantSpaces";
import { SpellItem } from "../../../../types/items";

export const parseSpellRange = (range: SpellItem["system"]["range"]) =>
  removeRedundantSpaces(
    `${range.value > 0 ? range.value : ""} ${range.units}`
  ).trim();
