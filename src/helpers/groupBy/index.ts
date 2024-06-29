type MapValuesToKeysIfAllowed<T> = {
  [K in keyof T]: T[K] extends PropertyKey ? K : never;
};
type Filter<T> = MapValuesToKeysIfAllowed<T>[keyof T];

export const groupBy = <
  ItemType extends Record<PropertyKey, any>,
  ItemKey extends Filter<ItemType>,
>(
  data: ItemType[],
  key: ItemKey
): Record<ItemType[ItemKey], ItemType[]> =>
  data.reduce(
    (groups, currentValue) => {
      const groupKey = currentValue[key];

      groups[groupKey] ??= [];
      groups[groupKey].push(currentValue);

      return groups;
    },
    {} as Record<ItemType[ItemKey], ItemType[]>
  );
