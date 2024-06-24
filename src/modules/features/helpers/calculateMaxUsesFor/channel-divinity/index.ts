import { CharacterBasicInfo } from "../../../../basicInformation/types";

export const calculateMaxUsesForChannelDivinity = (
  character: CharacterBasicInfo
) => {
  const clericLevels =
    character.classes.find((characterClass) => characterClass.name === "Cleric")
      ?.level ?? 0;

  if (clericLevels > 17) {
    return 3;
  }

  if (clericLevels > 5) {
    return 2;
  }

  return 1;
};
