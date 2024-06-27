import { RawHP, RawSenses } from "./attributes";
import { ClassItem, FeatItem, GenericItem, RaceItem } from "./items";
import { RawAbilities } from "./rawAbilities";
import { RawSkills } from "./rawSkills";
import { RawTrait, RawTraitsKeys } from "./traits";

export type RawSheet = {
  name: string;
  system: {
    abilities: RawAbilities;
    skills: RawSkills;
    attributes: {
      hp: RawHP;
      senses: RawSenses;
    };
    currency: Record<"pp" | "gp" | "ep" | "sp" | "cp", number>;
    traits: Record<RawTraitsKeys, RawTrait>;
  };
  items: Array<ClassItem | FeatItem | RaceItem | GenericItem>;
};
