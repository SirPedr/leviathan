import { cleanDirtyText } from "../../../../../helpers/cleanDirtyText";
import { GenericItem } from "../../../../../types/items";

export const adaptInventoryItem = (item: GenericItem) => ({
  name: item.name,
  type: item.type,
  quantity: item.system.quantity,
  description: cleanDirtyText(item.system.description.value),
});
