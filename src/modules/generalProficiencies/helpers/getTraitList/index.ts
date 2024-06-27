import { RawTrait } from "../../../../types/traits";

export const getTraitList = (trait: RawTrait) => {
  if (!trait.custom) {
    return trait.value;
  }

  const customLanguages = trait.custom.split(";");

  return [...trait.value, ...customLanguages];
};
