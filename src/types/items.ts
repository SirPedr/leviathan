export type ClassItem = {
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
