import { Flex, Stack, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import classes from "./index.module.css";

interface Props {
  icon?: React.ReactNode;
  title: string;
  description: string | number;
}

export const TraitLabel = ({ icon, title, description }: Props) => (
  <Flex align="center">
    {icon && (
      <ThemeIcon variant="filled" color="dark.6" className={classes.traitIcon}>
        {icon}
      </ThemeIcon>
    )}
    <Stack gap={0}>
      <Text size="sm">{title}</Text>
      <Text c="dark.1">{description}</Text>
    </Stack>
  </Flex>
);
