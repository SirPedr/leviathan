import {
  Button,
  CSSVariablesResolver,
  DEFAULT_THEME,
  FileInput,
  MantineColorsTuple,
  createTheme,
} from "@mantine/core";
import buttonOverrides from "./overrides/button.module.css";
import fileInputOverrides from "./overrides/fileInput.module.css";

const yellow: MantineColorsTuple = [
  "#fff9e0",
  "#fff2cb",
  "#fee49b",
  "#fbd566",
  "#fac83a",
  "#f9c01e",
  "#f9bc09",
  "#dda500",
  "#c69200",
  "#ab7d00",
];

export const mainThemeResolver: CSSVariablesResolver = () => ({
  variables: {},
  dark: {
    "--mantine-color-body": DEFAULT_THEME.colors.dark[9],
    "--mantine-color-text": DEFAULT_THEME.white,
  },
  light: {},
});

export const mainTheme = createTheme({
  fontFamily: "Manrope, sans-serif",
  colors: {
    yellow,
  },
  primaryColor: "yellow",
  primaryShade: 5,
  defaultRadius: 0,
  components: {
    Button: Button.extend({
      classNames: {
        root: buttonOverrides.button,
      },
    }),
    FileInput: FileInput.extend({
      classNames: {
        label: fileInputOverrides.fileInputLabel,
        input: fileInputOverrides.fileInputInput,
      },
    }),
  },
});
