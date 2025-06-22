export const removeDuplicates = <Value>(
  value: Value,
  index: number,
  collection: Value[]
) => collection.indexOf(value) === index;
