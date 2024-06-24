import { calculateAbilityModifier } from "../../../../helpers/calculateAbilityModifier";
import { RawAbilities } from "../../../../types/rawAbilities";
import { ABILITY_NAMES } from "../../consts/abilityNames.consts";

export const getAbilityModifiers = (
  abilities: RawAbilities
): Record<string, number> =>
  Object.entries(abilities).reduce(
    (parsedAbilities, [abilityID, abilityData]) => {
      const abilityName = ABILITY_NAMES[abilityID];

      return {
        ...parsedAbilities,
        [abilityName]: calculateAbilityModifier(abilityData.value),
      };
    },
    {} as Record<string, number>
  );
