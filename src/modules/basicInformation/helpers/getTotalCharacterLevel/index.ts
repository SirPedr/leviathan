import { CharacterClass } from "../../types";

export const getTotalCharacterLevel = (classes: CharacterClass[]) =>
  classes
    .map((chosenClass) => chosenClass.level)
    .reduce((acc, level) => level + acc, 0);
