import { CharacterBasicInfo } from "../../../../basicInformation/types";

export const calculateMaxUsesForSorceryPoints = (
  character: CharacterBasicInfo
) => {
  const sorcererLevels =
    character.classes.find(
      (characterClass) => characterClass.name === "Sorcerer"
    )?.level ?? 0;

  if (!sorcererLevels || sorcererLevels === 1) {
    return 0;
  }

  return sorcererLevels;
};
