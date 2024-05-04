import {
  CSSVariablesResolver,
  DEFAULT_THEME,
  MantineColorsTuple,
  createTheme,
} from "@mantine/core";

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
  dark: { "--mantine-color-body": DEFAULT_THEME.colors.dark[9] },
  light: {},
});

export const mainTheme = createTheme({
  colors: {
    yellow,
  },
});
