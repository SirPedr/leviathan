import { CharacterSheet } from "../../../../types/characterSheet";
import { useFeatures } from "../../hooks/useFeatures";

type Props = {
  character: CharacterSheet;
};
export const FeaturesPage = ({ character }: Props) => {
  useFeatures(character);
  return null;
};
