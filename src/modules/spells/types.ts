export type Spell = {
  name: string;
  description: string;
  prepared: boolean;
  castingTime: string;
  group: string | number;
  target: string;
  range: string;
};
