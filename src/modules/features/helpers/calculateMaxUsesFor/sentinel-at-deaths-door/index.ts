import { CharacterBasicInfo } from "../../../../basicInformation/types";

export const calculateMaxUsesForSentinelAtDeathsDoor = (
  character: CharacterBasicInfo
) => Math.max(character.modifiers.wisdom, 1);
