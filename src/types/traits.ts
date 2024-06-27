export type RawTrait = {
  value: Array<string>;
  custom: string;
  bypasses?: string[];
};

export type RawTraitsKeys =
  | "di"
  | "dr"
  | "dv"
  | "ci"
  | "languages"
  | "weaponProf"
  | "armorProf";
