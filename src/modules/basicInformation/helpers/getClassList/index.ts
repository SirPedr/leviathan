import { RawSheet } from "../../../../types/rawSheet";

export const getClassList = (sheet: RawSheet) =>
  sheet.items
    .filter((item) => item.type === "class")
    .map((chosenClass) => ({
      name: chosenClass.name,
      level: chosenClass.system.levels,
    }));
