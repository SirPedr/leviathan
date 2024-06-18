import { Button, Collapse, List } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { PropsWithChildren } from "react";
import classes from "./index.module.css";
import { clsx } from "clsx";
import { CollapsibleGroupItem } from "./Item";
type Props = PropsWithChildren<{
  name: React.ReactNode;
  className?: string;
}>;

export const CollapsibleGroup = ({ name, children, className }: Props) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <section className={clsx(classes.collapsibleGroup, className)}>
      <Button
        onClick={toggle}
        className={classes.collapsibleGroupTrigger}
        justify="flex-start"
      >
        {name}
      </Button>

      <Collapse
        in={opened}
        transitionDuration={200}
        transitionTimingFunction="linear"
      >
        <List type="unordered" listStyleType="none">
          {children}
        </List>
      </Collapse>
    </section>
  );
};

CollapsibleGroup.Item = CollapsibleGroupItem;
