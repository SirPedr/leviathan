import { ListItem, Text } from "@mantine/core";
import { ABILITY_SLUGS } from "../../consts/abilityNames.consts";
import classes from "./index.module.css";

type Props = {
  name: string;
  value: number;
};

export const AbilityModifier = ({ name, value }: Props) => (
  <ListItem>
    <Text c="yellow.4" className={classes.abilityModifierName}>
      {ABILITY_SLUGS[name].toUpperCase()}
    </Text>
    <Text className={classes.abilityModifierValue}>
      {value > 0 ? `+${value}` : value}
    </Text>
  </ListItem>
);
