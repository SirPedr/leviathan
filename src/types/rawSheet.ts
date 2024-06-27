import { RawAbilities } from "./rawAbilities";
import { HPAttribute } from "./attributes";
import { ClassItem, FeatItem, GenericItem } from "./items";
import { RawSkills } from "./rawSkills";

export type RawSheet = {
  name: string;
  system: {
    abilities: RawAbilities;
    skills: RawSkills;
    attributes: {
      hp: HPAttribute;
    };
    currency: Record<"pp" | "gp" | "ep" | "sp" | "cp", number>;
  };
  items: Array<ClassItem | FeatItem | GenericItem>;
};
