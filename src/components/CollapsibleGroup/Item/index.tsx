import { Box, Button, Collapse, ListItem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { PropsWithChildren } from "react";
import classes from "./index.module.css";

type Props = PropsWithChildren<{
  title: React.ReactNode;
}>;

export const CollapsibleGroupItem = ({ title, children }: Props) => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <ListItem
      classNames={{
        itemWrapper: classes.collapsibleGroupItemWrapper,
        itemLabel: classes.collapsibleGroupItemLabel,
      }}
    >
      <Button
        onClick={toggle}
        className={classes.collapsibleGroupItemTrigger}
        justify="space-between"
        fullWidth
      >
        {title}
      </Button>
      <Collapse in={opened}>
        <Box className={classes.collapsibleGroupItemContent}>{children}</Box>
      </Collapse>
    </ListItem>
  );
};
