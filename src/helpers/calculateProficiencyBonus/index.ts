export const calculateProficiencyBonus = (totalLevel: number) =>
  Math.ceil(1 + totalLevel / 4);
