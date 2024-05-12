import { useRouterState } from "@tanstack/react-router";
import { useBasicCharacterInformation } from "../../../basicInformation/hooks/useBasicCharacterInformation/useBasicCharacterInformation";
import { CharacterSheet } from "../../../../types/characterSheet";

export const CharacterPage = () => {
  const routerState = useRouterState();
  const basicInformation = useBasicCharacterInformation(
    routerState.location.state.sheet as CharacterSheet
  );

  console.log(basicInformation);

  return <h1>AAAAAAA</h1>;
};
3;
