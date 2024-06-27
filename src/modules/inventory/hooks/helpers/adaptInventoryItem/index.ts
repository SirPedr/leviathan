import { cleanDirtyText } from "../../../../../helpers/cleanDirtyText";
import { ClassItem, FeatItem, GenericItem } from "../../../../../types/items";

export const adaptInventoryItem = (
  item: ClassItem | FeatItem | GenericItem
) => ({
  name: item.name,
  type: item.type,
  quantity: item.system.quantity,
  description: cleanDirtyText(item.system.description.value),
});
