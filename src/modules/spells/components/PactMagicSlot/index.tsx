import { ActionIcon, Group, Text } from "@mantine/core";
import { IconCircle, IconCircleFilled } from "@tabler/icons-react";

type Props = {
  level: number;
  maxSlots: number;
  slotStates: boolean[];
  onToggleSlot: (slotIndex: number) => void;
};

export const PactMagicSlot = ({ level, maxSlots, slotStates, onToggleSlot }: Props) => {
  if (maxSlots === 0) return null;

  return (
    <Group gap="xs" align="center">
      <Text size="sm" fw="bold" c="violet">
        Pact Magic ({level}th)
      </Text>
      <Group gap={4}>
        {Array.from({ length: maxSlots }, (_, index) => {
          const isUsed = slotStates[index] || false;

          return (
            <ActionIcon
              key={index}
              variant="transparent"
              size="sm"
              c={isUsed ? "gray" : "violet"}
              onClick={(e) => {
                e.stopPropagation();
                onToggleSlot(index);
              }}
              style={{ cursor: "pointer" }}
            >
              {isUsed ? <IconCircle size={16} /> : <IconCircleFilled size={16} />}
            </ActionIcon>
          );
        })}
      </Group>
    </Group>
  );
};