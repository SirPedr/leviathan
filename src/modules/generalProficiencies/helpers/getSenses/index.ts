import { RaceItem } from "../../../../types/items";
import { RawSheet } from "../../../../types/rawSheet";

export const getSenses = (sheet: RawSheet) => {
  const raceSettings = sheet.items.find(
    (item): item is RaceItem => item.type === "race"
  );

  const {
    units: _,
    special: __,
    ...generalSenses
  } = sheet.system.attributes.senses;

  if (!raceSettings) {
    return generalSenses;
  }

  const {
    units: ___,
    special: ____,
    ...raceSenses
  } = raceSettings.system.senses;

  return { ...generalSenses, ...raceSenses };
};
