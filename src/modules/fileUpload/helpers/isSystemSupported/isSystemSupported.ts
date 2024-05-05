import { SUPPORTED_SYSTEMS } from "../../consts/sheetUpload.consts";

export const isSystemSupported = (system: string) =>
  SUPPORTED_SYSTEMS.includes(system);
