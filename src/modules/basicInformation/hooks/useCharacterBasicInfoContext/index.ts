import { useContext } from "react";
import { CharacterBasicInformationContext } from "../../contexts/characterBasicInformationContext";

export const useBasicCharacterInfoContext = () => {
  const context = useContext(CharacterBasicInformationContext);

  if (!context) {
    throw new Error(
      "You must be inside a BasicCharacterInformationContextProvider in order to use this context."
    );
  }
  return context;
};
