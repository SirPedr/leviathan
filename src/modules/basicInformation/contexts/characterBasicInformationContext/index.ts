import { createContext } from "react";
import { CharacterBasicInfo } from "../../types";

export const CharacterBasicInformationContext =
  createContext<CharacterBasicInfo>({} as CharacterBasicInfo);
