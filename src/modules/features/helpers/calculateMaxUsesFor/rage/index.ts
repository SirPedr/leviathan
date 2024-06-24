import { CharacterBasicInfo } from "../../../../basicInformation/types";

export const calculateMaxUsesForRage = (character: CharacterBasicInfo) => {
  const barbarianLevels =
    character.classes.find((characterClass) => characterClass.name === "Monk")
      ?.level ?? 0;

  if (barbarianLevels > 19) {
    return Infinity;
  }

  if (barbarianLevels > 16) {
    return 6;
  }

  if (barbarianLevels > 11) {
    return 5;
  }

  if (barbarianLevels > 5) {
    return 4;
  }

  if (barbarianLevels > 2) {
    return 3;
  }

  return 2;
};
