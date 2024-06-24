import { RawAbilities } from "./rawAbilities";
import { HPAttribute } from "./attributes";
import { ClassItem, FeatItem } from "./items";
import { RawSkills } from "./rawSkills";

export type RawSheet = {
  name: string;
  system: {
    abilities: RawAbilities;
    skills: RawSkills;
    attributes: {
      hp: HPAttribute;
    };
  };
  items: Array<ClassItem | FeatItem>;
};
