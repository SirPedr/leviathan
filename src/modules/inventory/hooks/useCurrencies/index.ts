import { RawSheet } from "../../../../types/rawSheet";

type CharacterCurrencies = Record<
  "platinum" | "gold" | "electrum" | "silver" | "copper",
  number
>;

export const useCurrencies = (sheet: RawSheet): CharacterCurrencies => {
  const { currency } = sheet.system;

  return {
    platinum: currency.pp,
    gold: currency.gp,
    electrum: currency.ep,
    silver: currency.sp,
    copper: currency.cp,
  };
};
