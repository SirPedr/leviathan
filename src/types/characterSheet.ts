import { HPAttribute } from "./attributes";
import { ClassItem } from "./items";

export type CharacterSheet = {
  name: string;
  system: {
    attributes: {
      hp: HPAttribute;
    };
  };
  items: Array<
    {
      _id: string;
      name: string;
    } & ClassItem
  >;
};
