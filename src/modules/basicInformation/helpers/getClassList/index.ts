import { CharacterSheet } from "../../../../types/characterSheet";

export const getClassList = (sheet: CharacterSheet) =>
  sheet.items
    .filter((item) => item.type === "class")
    .map((chosenClass) => ({
      name: chosenClass.name,
      level: chosenClass.system.levels,
    }));
