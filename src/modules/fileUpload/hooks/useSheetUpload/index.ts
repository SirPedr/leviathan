import { useNavigate } from "@tanstack/react-router";
import {
  MAX_SIZE_IN_BYTES,
  MINIMUM_DND_SUPPORTED_VERSION,
} from "../../consts/sheetUpload.consts";
import { isCharacterSheet } from "../../helpers/isCharacterSheet";
import { isSystemSupported } from "../../helpers/isSystemSupported/isSystemSupported";
import { isSystemVersionSupported } from "../../helpers/isSystemVersionSupported";
import { readSheetFile } from "../../helpers/readSheetFile";

declare module "@tanstack/react-router" {
  interface HistoryState {
    sheet: unknown;
  }
}

export const useSheetUpload = () => {
  const navigate = useNavigate();

  const validateBasicSheetUpload = (sheet: File | null) => {
    if (!sheet) {
      return "Please upload a character sheet";
    }

    if (sheet.size > MAX_SIZE_IN_BYTES) {
      return "Maximum upload file size is 1 MB";
    }
  };

  const validateSheetContent = async (sheet: File | null) => {
    if (!sheet) {
      return;
    }

    const sheetContent = await readSheetFile(sheet);

    if (!isCharacterSheet(sheetContent.type)) {
      return "The file needs to be from a Foundry character sheet";
    }

    if (!isSystemSupported(sheetContent._stats.systemId)) {
      return "Please upload a sheet from a supported system (D&D 5e)";
    }

    if (
      !isSystemVersionSupported(
        sheetContent._stats.systemVersion,
        MINIMUM_DND_SUPPORTED_VERSION
      )
    ) {
      return "Only sheets from D&D 3.0 or higher are supported";
    }
  };

  const submitCharacterSheet = async (sheet: File) => {
    const sheetContent = await readSheetFile(sheet);

    navigate({ to: "/character", state: { sheet: sheetContent } });
  };

  return {
    validateBasicSheetUpload,
    validateSheetContent,
    submitCharacterSheet,
  };
};
