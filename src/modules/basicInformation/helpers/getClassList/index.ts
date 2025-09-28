import { ClassItem } from "../../../../types/items";
import { RawSheet } from "../../../../types/rawSheet";

export const getClassList = (sheet: RawSheet) =>
  sheet.items
    .filter((item): item is ClassItem => item.type === "class")
    .map((chosenClass) => ({
      name: chosenClass.name,
      level: chosenClass.system.levels,
      subclass: chosenClass.system.identifier || undefined,
    }));
