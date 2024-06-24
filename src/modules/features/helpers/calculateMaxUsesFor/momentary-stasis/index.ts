import { CharacterBasicInfo } from "../../../../basicInformation/types";

export const calculateMaxUsesForMomentaryStasis = (
  character: CharacterBasicInfo
) => character.modifiers.intelligence ?? 0;
