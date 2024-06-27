import { RawTrait } from "../../../../types/traits";
import { ARMOR_PROFICIENCY_NAMES } from "../../consts/armorProficiencyNames.consts";
import { getTraitList } from "../getTraitList";

export const getArmorProficiecies = (proficiencies: RawTrait) =>
  getTraitList(proficiencies).map(
    (name) => ARMOR_PROFICIENCY_NAMES[name] ?? name
  );
