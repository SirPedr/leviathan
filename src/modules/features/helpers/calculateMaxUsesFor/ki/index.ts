import { CharacterBasicInfo } from "../../../../basicInformation/types";

export const calculateMaxUsesForKi = (character: CharacterBasicInfo) => {
  const monkLevels =
    character.classes.find((characterClass) => characterClass.name === "Monk")
      ?.level ?? 0;

  return monkLevels;
};
