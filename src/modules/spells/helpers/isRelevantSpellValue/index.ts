export const isRelevantSpellValue = (value: unknown) => {
  const valueAsNumber = Number(value);
  const isRelevantValue = isNaN(valueAsNumber)
    ? Boolean(value)
    : valueAsNumber !== 0;

  return isRelevantValue;
};
