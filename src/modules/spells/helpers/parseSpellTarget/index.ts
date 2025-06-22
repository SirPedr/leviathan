import { removeRedundantSpaces } from "../../../../helpers/removeRedundantSpaces";
import { SpellItem } from "../../../../types/items";

export const parseSpellTarget = (
  target: SpellItem["system"]["target"]["affects"]
) =>
  removeRedundantSpaces(
    `${(target.count ?? -1) > 0 ? target.count : ""} ${target.type ?? ""}`
  ).trim();
