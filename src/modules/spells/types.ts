export type Spell = {
  name: string;
  description: string;
  prepared: boolean;
  castingTime: string;
  group: string | number;
  target: string;
  range: string;
};

export type SpellSlotState = {
  level: number;
  max: number;
  slots: boolean[];
};

export type SpellSlotsState = Record<number, SpellSlotState>;

export type PactMagicState = {
  level: number;
  max: number;
  slots: boolean[];
};
