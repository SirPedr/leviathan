export type CharacterFeatures = {
  id: string;
  name: string;
  type: string;
  description: string;
  uses: {
    current: number;
    max: number;
  } | null;
  recoveryAt: string | null;
};

export type CharacterFeatureGroup = Record<string, CharacterFeatures[]>;
