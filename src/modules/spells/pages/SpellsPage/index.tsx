import { Badge, Box, Flex, Group, Text } from "@mantine/core";
import { CollapsibleGroup } from "../../../../components/CollapsibleGroup";
import { RawSheet } from "../../../../types/rawSheet";
import {
  SPELL_BADGES_KEYS,
  SPELL_GROUP_NAMES,
} from "../../consts/spellDisplay.const";
import { sortByDisplayPriority } from "../../helpers/orderByDisplayPriority";
import { useSpells } from "../../hooks/useSpells";
import { IconSunFilled } from "@tabler/icons-react";

type Props = {
  sheet: RawSheet;
};

export const SpellsPage = ({ sheet }: Props) => {
  const groupedSpells = useSpells(sheet);

  const sortedGroupIDs = Object.keys(groupedSpells).sort(sortByDisplayPriority);

  return sortedGroupIDs.map((groupID) => {
    const spells = groupedSpells[groupID];
    const isLevelledSpellGroup = !isNaN(Number(groupID)) && Number(groupID) > 0;

    return (
      <CollapsibleGroup name={SPELL_GROUP_NAMES[groupID]} key={groupID}>
        {spells.map((spell, index) => (
          <CollapsibleGroup.Item
            title={
              <Flex>
                <Text mr="sm">{spell.name}</Text>
                {spell.prepared && isLevelledSpellGroup ? (
                  <IconSunFilled />
                ) : null}
              </Flex>
            }
            key={`${groupID}-${index}`}
          >
            <Group mb="sm">
              {SPELL_BADGES_KEYS.map((badgeKey) => {
                const value = spell[badgeKey];
                const valueAsNumber = Number(value);
                const isRelevantValue = isNaN(valueAsNumber)
                  ? Boolean(value)
                  : valueAsNumber !== 0;

                return isRelevantValue ? (
                  <Badge c="black" radius="xs" fw="900" key={badgeKey}>
                    {value}
                  </Badge>
                ) : null;
              })}
            </Group>

            {spell.description}
          </CollapsibleGroup.Item>
        ))}
      </CollapsibleGroup>
    );
  });
};
