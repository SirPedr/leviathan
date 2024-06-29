import { useMemo } from "react";
import { groupBy } from "../../../../helpers/groupBy";
import { SpellItem } from "../../../../types/items";
import { RawSheet } from "../../../../types/rawSheet";
import { adaptSpell } from "../../helpers/adaptSpell";

/**
 * {spellGroups: [
 *  {
 *      level: 1,
 *      spellSlots: {
 *          max: 4,
 *          available: 2
 *      }
 *      spells: [{
 *          name: "Fireball",
 *          description: "blablabla",
 *          prepared: boolean;
 *          castingTime: "1 action",
 *          range: "120 ft",
 *          target: "self"
 *      }]
 *  }
 * ]
 *
 * }
 */
export const useSpells = (sheet: RawSheet) => {
  const spellItems = useMemo(
    () =>
      sheet.items
        .filter((item): item is SpellItem => item.type === "spell")
        .map(adaptSpell),
    [sheet]
  );

  const groupedSpells = useMemo(
    () => groupBy(spellItems, "group"),
    [spellItems]
  );

  return groupedSpells;
};
