import { CharacterClass } from "../../../basicInformation/types";

export const formatMulticlassLevels = (classes: CharacterClass[]) => {
  const classLevels = classes.map(({ name, level }) => `${level} ${name}`);

  return new Intl.ListFormat("en-US", {
    type: "conjunction",
    style: "long",
  }).format(classLevels);
};
