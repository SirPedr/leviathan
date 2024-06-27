export type RawHP = {
  value: number;
  max: number;
  temp: number;
  tempmax: number;
  bonuses: {
    level: string;
    overall: string;
  };
};

export type RawSenses = {
  darkvision: number | null;
  blindsight: number | null;
  tremorsense: number | null;
  truesight: number | null;
  units: string;
  special: string;
};
