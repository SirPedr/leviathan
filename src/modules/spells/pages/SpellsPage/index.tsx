import { Badge, Flex, Group, Text } from "@mantine/core";
import { IconSunFilled } from "@tabler/icons-react";
import { CollapsibleGroup } from "../../../../components/CollapsibleGroup";
import { removeDuplicates } from "../../../../helpers/removeDuplicates";
import { RawSheet } from "../../../../types/rawSheet";
import {
  SPELL_BADGES_KEYS,
  SPELL_GROUP_NAMES,
} from "../../consts/spellDisplay.const";
import { isRelevantSpellValue } from "../../helpers/isRelevantSpellValue";
import { sortByDisplayPriority } from "../../helpers/orderByDisplayPriority";
import { useSpells } from "../../hooks/useSpells";

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
              {SPELL_BADGES_KEYS.map((badgeKey) => spell[badgeKey])
                .filter(isRelevantSpellValue)
                .filter(removeDuplicates)
                .map((value, index) => (
                  <Badge c="black" radius="xs" fw="900" key={index}>
                    {value}
                  </Badge>
                ))}
            </Group>

            {spell.description}
          </CollapsibleGroup.Item>
        ))}
      </CollapsibleGroup>
    );
  });
};
