import { FeatItem } from "../../../../types/items";

export const isItemAFeature = (item: { type: string }): item is FeatItem =>
  item.type === "feat";
