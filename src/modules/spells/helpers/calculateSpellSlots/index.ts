import { CharacterClass } from "../../../basicInformation/types";
const SPELL_SLOTS_BY_LEVEL: Record<number, Record<number, number>> = {
  1: { 1: 2, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
  2: { 1: 3, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
  3: { 1: 4, 2: 2, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
  4: { 1: 4, 2: 3, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
  5: { 1: 4, 2: 3, 3: 2, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
  6: { 1: 4, 2: 3, 3: 3, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
  7: { 1: 4, 2: 3, 3: 3, 4: 1, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
  8: { 1: 4, 2: 3, 3: 3, 4: 2, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
  9: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1, 6: 0, 7: 0, 8: 0, 9: 0 },
  10: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 0, 7: 0, 8: 0, 9: 0 },
  11: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 0, 8: 0, 9: 0 },
  12: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 0, 8: 0, 9: 0 },
  13: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 0, 9: 0 },
  14: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 0, 9: 0 },
  15: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 0 },
  16: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 0 },
  17: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 },
  18: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 },
  19: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 },
  20: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 },
};

const FULL_CASTERS = ['bard', 'cleric', 'druid', 'sorcerer', 'wizard'];

const HALF_CASTERS = ['paladin', 'ranger'];

const THIRD_CASTERS = ['artificer'];
const SPELLCASTING_SUBCLASSES: Record<string, string[]> = {
  fighter: ['eldritch knight'],
  rogue: ['arcane trickster'],
};
const getSpellcastingType = (className: string, subclassName?: string): 'full' | 'half' | 'third' | 'none' => {
  const normalizedClassName = className.toLowerCase();

  if (FULL_CASTERS.includes(normalizedClassName)) {
    return 'full';
  }

  if (HALF_CASTERS.includes(normalizedClassName)) {
    return 'half';
  }

  if (THIRD_CASTERS.includes(normalizedClassName)) {
    return 'third';
  }

  if (subclassName && SPELLCASTING_SUBCLASSES[normalizedClassName]) {
    const normalizedSubclass = subclassName.toLowerCase();
    if (SPELLCASTING_SUBCLASSES[normalizedClassName].includes(normalizedSubclass)) {
      return 'third';
    }
  }

  return 'none';
};
export const calculateCasterLevel = (classes: CharacterClass[]): number => {
  let casterLevel = 0;

  for (const characterClass of classes) {
    const spellcastingType = getSpellcastingType(characterClass.name, characterClass.subclass);

    switch (spellcastingType) {
      case 'full':
        casterLevel += characterClass.level;
        break;
      case 'half':
        casterLevel += Math.floor(characterClass.level / 2);
        break;
      case 'third':
        if (characterClass.level >= 3) {
          casterLevel += Math.floor(characterClass.level / 3);
        }
        if (characterClass.name.toLowerCase() === 'artificer' && characterClass.level >= 2) {
          casterLevel = casterLevel - Math.floor(characterClass.level / 3) + Math.floor(characterClass.level / 2);
        }
        break;
      case 'none':
      default:
        break;
    }
  }

  return Math.min(casterLevel, 20);
};
export const calculateSpellSlots = (classes: CharacterClass[]): Record<number, number> => {
  const casterLevel = calculateCasterLevel(classes);

  if (casterLevel === 0) {
    return { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  }

  return SPELL_SLOTS_BY_LEVEL[casterLevel] || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
};
export const calculatePactMagicSlots = (classes: CharacterClass[]): { level: number; slots: number } => {
  const warlockClass = classes.find(cls => cls.name.toLowerCase() === 'warlock');

  if (!warlockClass || warlockClass.level === 0) {
    return { level: 0, slots: 0 };
  }

  const level = warlockClass.level;

  if (level >= 17) return { level: 5, slots: 4 };
  if (level >= 11) return { level: 5, slots: 3 };
  if (level >= 9) return { level: 5, slots: 2 };
  if (level >= 7) return { level: 4, slots: 2 };
  if (level >= 5) return { level: 3, slots: 2 };
  if (level >= 3) return { level: 2, slots: 2 };
  if (level >= 1) return { level: 1, slots: 1 };

  return { level: 0, slots: 0 };
};
export const hasSpellcasting = (classes: CharacterClass[]): boolean => {
  return calculateCasterLevel(classes) > 0;
};
export const hasPactMagic = (classes: CharacterClass[]): boolean => {
  return classes.some(cls => cls.name.toLowerCase() === 'warlock' && cls.level > 0);
};