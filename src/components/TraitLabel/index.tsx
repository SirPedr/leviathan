import {
  Flex,
  Stack,
  Text,
  ThemeIcon,
  createPolymorphicComponent,
} from "@mantine/core";
import React, { forwardRef } from "react";
import classes from "./index.module.css";

interface Props {
  icon?: React.ReactNode;
  title: string;
  description: string | number;
}

export const TraitLabel = createPolymorphicComponent<"div", Props>(
  forwardRef<HTMLDivElement, Props>(
    ({ icon, title, description, ...otherProps }, ref) => (
      <Flex align="center" {...otherProps} ref={ref}>
        {icon && (
          <ThemeIcon
            variant="filled"
            color="dark.6"
            className={classes.traitIcon}
          >
            {icon}
          </ThemeIcon>
        )}
        <Stack gap={0}>
          <Text size="sm">{title}</Text>
          <Text c="dark.1">{description}</Text>
        </Stack>
      </Flex>
    )
  )
);
