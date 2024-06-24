import { CharacterBasicInfo } from "../../../../basicInformation/types";

export const calculateMaxUsesForEyesOfTheGrave = (
  character: CharacterBasicInfo
) => Math.max(character.modifiers.wisdom, 1);
