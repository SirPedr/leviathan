import { Badge, Flex, Group, Text, Stack, Button } from "@mantine/core";
import { IconSunFilled, IconRefresh } from "@tabler/icons-react";
import { useContext } from "react";
import { CollapsibleGroup } from "../../../../components/CollapsibleGroup";
import { removeDuplicates } from "../../../../helpers/removeDuplicates";
import { RawSheet } from "../../../../types/rawSheet";
import { CharacterBasicInformationContext } from "../../../basicInformation/contexts/characterBasicInformationContext";
import {
  SPELL_BADGES_KEYS,
  SPELL_GROUP_NAMES,
} from "../../consts/spellDisplay.const";
import { SpellSlot } from "../../components/SpellSlot";
import { PactMagicSlot } from "../../components/PactMagicSlot";
import { isRelevantSpellValue } from "../../helpers/isRelevantSpellValue";
import { sortByDisplayPriority } from "../../helpers/orderByDisplayPriority";
import { useSpells } from "../../hooks/useSpells";
import { useSpellSlots } from "../../hooks/useSpellSlots";

type Props = {
  sheet: RawSheet;
};

export const SpellsPage = ({ sheet }: Props) => {
  const basicInfo = useContext(CharacterBasicInformationContext);
  const groupedSpells = useSpells(sheet);
  const {
    spellSlots,
    canCastSpells,
    toggleSpellSlot,
    resetAllSlots,
    pactMagicSlots,
    canUsePactMagic,
    togglePactMagicSlot,
    resetPactMagicSlots,
  } = useSpellSlots(basicInfo.classes);

  const sortedGroupIDs = Object.keys(groupedSpells).sort(sortByDisplayPriority);

  return (
    <Stack gap="md">
      {(canCastSpells || canUsePactMagic) && (
        <Group justify="flex-end" gap="sm">
          {canUsePactMagic && (
            <Button
              leftSection={<IconRefresh size={16} />}
              variant="light"
              size="sm"
              c="violet"
              onClick={resetPactMagicSlots}
            >
              Short Rest
            </Button>
          )}
          <Button
            leftSection={<IconRefresh size={16} />}
            variant="light"
            size="sm"
            onClick={resetAllSlots}
          >
            Long Rest
          </Button>
        </Group>
      )}

      {canUsePactMagic && (
        <PactMagicSlot
          level={pactMagicSlots.level}
          maxSlots={pactMagicSlots.max}
          slotStates={pactMagicSlots.slots}
          onToggleSlot={togglePactMagicSlot}
        />
      )}

      {sortedGroupIDs.map((groupID) => {
        const spells = groupedSpells[groupID];
        const isLevelledSpellGroup =
          !isNaN(Number(groupID)) && Number(groupID) > 0;
        const spellLevel = Number(groupID);

        // Get spell slot info for this level
        const hasSpellSlots =
          canCastSpells &&
          isLevelledSpellGroup &&
          spellSlots[spellLevel]?.max > 0;

        return (
          <CollapsibleGroup
            name={
              <Flex align="center" gap="md">
                <Text>{SPELL_GROUP_NAMES[groupID]}</Text>
                {hasSpellSlots && (
                  <SpellSlot
                    level={spellLevel}
                    maxSlots={spellSlots[spellLevel].max}
                    slotStates={spellSlots[spellLevel].slots}
                    onToggleSlot={toggleSpellSlot}
                  />
                )}
              </Flex>
            }
            key={groupID}
          >
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
      })}
    </Stack>
  );
};
