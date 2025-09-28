import { ActionIcon, Group } from "@mantine/core";
import { IconCircle, IconCircleFilled } from "@tabler/icons-react";

type Props = {
  level: number;
  maxSlots: number;
  slotStates: boolean[];
  onToggleSlot: (level: number, slotIndex: number) => void;
  isPactMagic?: boolean;
};

export const SpellSlot = ({
  level,
  maxSlots,
  slotStates,
  onToggleSlot,
  isPactMagic = false,
}: Props) => {
  if (maxSlots === 0) return null;

  const availableColor = isPactMagic ? "violet" : "yellow";

  return (
    <Group gap={4}>
      {Array.from({ length: maxSlots }, (_, index) => {
        const isUsed = slotStates[index] || false;

        return (
          <ActionIcon
            key={index}
            variant="transparent"
            size={"sm"}
            c={isUsed ? "gray" : availableColor}
            onClick={(e) => {
              e.stopPropagation();
              onToggleSlot(level, index);
            }}
            style={{ cursor: "pointer" }}
          >
            {isUsed ? <IconCircle size={16} /> : <IconCircleFilled size={16} />}
          </ActionIcon>
        );
      })}
    </Group>
  );
};
