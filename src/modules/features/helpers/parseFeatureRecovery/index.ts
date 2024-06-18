import { FeatItem } from "../../../../types/items";

export const parseFeatureRecovery = (
  uses: FeatItem["system"]["uses"]
): string | null => {
  if (!uses.per) {
    return null;
  }

  if (uses.per === "lr") {
    return "Long rest";
  }

  return "Short rest";
};
