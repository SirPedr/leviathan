export const formatSkillModifier = (modifier: number) =>
  modifier < 0 ? modifier : `+${modifier}`;
