import { CharacterAbilities } from "./abilities";
import { HPAttribute } from "./attributes";
import { ClassItem, FeatItem } from "./items";
import { SheetSkills } from "./skills";

export type CharacterSheet = {
  name: string;
  system: {
    abilities: CharacterAbilities;
    skills: SheetSkills;
    attributes: {
      hp: HPAttribute;
    };
  };
  items: Array<ClassItem | FeatItem>;
};
