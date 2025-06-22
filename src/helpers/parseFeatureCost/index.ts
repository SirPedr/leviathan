import { FeatItem } from "../../types/items";

const specialCostTypes = ["special", "none"];

export const parseActivationCost = (
  cost: FeatItem["system"]["activation"]
): string | null => {
  if (!cost.type || specialCostTypes.includes(cost.type)) {
    return null;
  }

  return `${cost.cost ?? 1} ${
    cost.type === "bonus" ? "bonus action" : cost.type
  }`;
};
