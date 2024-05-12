export type HPAttribute = {
  value: number;
  max: number;
  temp: number;
  tempmax: number;
  bonuses: {
    level: string;
    overall: string;
  };
};
