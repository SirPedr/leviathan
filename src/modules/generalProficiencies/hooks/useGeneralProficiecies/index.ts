import { RawSheet } from "../../../../types/rawSheet";
import { getArmorProficiecies } from "../../helpers/getArmorProficiencies";
import { getTraitList } from "../../helpers/getTraitList";
import { getSenses } from "../../helpers/getSenses";
import { getWeaponProficiencies } from "../../helpers/getWeaponProficiencies";

export const useGeneralProficiecies = (sheet: RawSheet) => {
  const {
    system: { traits },
  } = sheet;

  return {
    damageResistances: getTraitList(traits.dr),
    damageImmunities: getTraitList(traits.di),
    damageVulnerabilities: getTraitList(traits.dv),
    conditionImmunities: getTraitList(traits.ci),
    armor: getArmorProficiecies(traits.armorProf),
    weapon: getWeaponProficiencies(traits.weaponProf),
    languages: getTraitList(traits.languages),
    senses: getSenses(sheet),
  };
};
