type CommonItem = {
  _id: string;
  name: string;
};
export type ClassItem = CommonItem & {
  type: "class";
  system: {
    description: {
      value: string;
      chat: string;
    };
    source: { custom: string };
    identifier: string;
    levels: number;
    hitDice: string;
    hitDiceUsed: string;
    advancement: unknown[];
    spellcasting: unknown[];
    startingEquipment: unknown[];
  };
};

export type FeatItem = CommonItem & {
  type: "feat";
  system: {
    description: {
      value: string;
      chat: string;
    };
    source: { custom: string };
    activation: {
      type: string;
      cost: number;
      condition: string;
    };
    duration: {
      value: string;
      units: string;
    };
    cover: null;
    crewed: boolean;
    uses: {
      value: string | null;
      max: string;
      per: "lr" | "sr" | null;
      recovery: string;
      prompt: boolean;
    };
    actionType: string;
  };
  img: string;
  flags: {
    plutonium?: {
      page: string;
      source: string;
      hash: string;
    };
    srd5e?: {
      page: string;
      source: string;
      hash: string;
    };
  };
  folder: string | null;
  sort: number;
  ownership: { default: number } & Record<string, number>;
};
