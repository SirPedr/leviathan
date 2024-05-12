import { createLazyFileRoute } from "@tanstack/react-router";
import { CharacterPage } from "../modules/character/pages/CharacterPage";

export const Route = createLazyFileRoute("/character")({
  component: () => <CharacterPage />,
});
