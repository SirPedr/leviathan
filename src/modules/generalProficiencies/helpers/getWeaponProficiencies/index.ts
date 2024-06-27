import { RawTrait } from "../../../../types/traits";
import { WEAPON_PROFICIENCY_NAMES } from "../../consts/weaponProficiencyNames.consts";
import { getTraitList } from "../getTraitList";

export const getWeaponProficiencies = (proficiencies: RawTrait) =>
  getTraitList(proficiencies).map(
    (name) => WEAPON_PROFICIENCY_NAMES[name] ?? name
  );
