import { useMemo } from "react";
import { sortAlphabetically } from "../../../../helpers/sortAlphabetically";
import { RawSheet } from "../../../../types/rawSheet";
import { adaptInventoryItem } from "../helpers/adaptInventoryItem";
import { GenericItem } from "../../../../types/items";

const allowed = ["loot", "weapon", "consumable", "tool", "equipment"];

export const useInventory = (sheet: RawSheet) =>
  useMemo(
    () =>
      sheet.items
        .filter((item): item is GenericItem => allowed.includes(item.type))
        .map(adaptInventoryItem)
        .sort((a, b) => sortAlphabetically(a.name, b.name)),
    [sheet.items]
  );
