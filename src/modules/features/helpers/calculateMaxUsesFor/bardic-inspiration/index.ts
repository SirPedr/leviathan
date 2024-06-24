import { CharacterBasicInfo } from "../../../../basicInformation/types";

export const calculateMaxUsesForBardicInspiration = (
  character: CharacterBasicInfo
) => Math.max(character.modifiers.charisma, 1);
