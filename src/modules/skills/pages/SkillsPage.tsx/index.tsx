import { ActionIcon, List, Popover, Text } from "@mantine/core";
import { TraitLabel } from "../../../../components/TraitLabel";
import {
  PROFICIENCY_DISPLAY_NAME,
  PROFICIENCY_ICONS,
} from "../../consts/proficiency.consts";
import { formatSkillModifier } from "../../helpers/formatSkillModifier";
import { formatSkillName } from "../../helpers/formatSkillName";
import { CharacterSkills } from "../../types";
import classes from "./index.module.css";

type Props = {
  skills: CharacterSkills;
};

export const SkillsPage = ({ skills }: Props) => (
  <section>
    <List
      listStyleType="none"
      classNames={{
        item: classes.skill,
        itemWrapper: classes.skillWrapper,
        itemLabel: classes.skillLabel,
      }}
    >
      {Object.entries(skills).map(([skillName, skillData]) => {
        const Icon = PROFICIENCY_ICONS[skillData.proficiency];

        return (
          <List.Item key={skillName}>
            <TraitLabel
              title={formatSkillName(skillName)}
              description={formatSkillModifier(skillData.modifier)}
            />

            <Popover position="left">
              <Popover.Target>
                <ActionIcon radius="sm">
                  <Icon width={16} />
                </ActionIcon>
              </Popover.Target>

              <Popover.Dropdown>
                <Text size="xs">
                  {PROFICIENCY_DISPLAY_NAME[skillData.proficiency]}
                </Text>
              </Popover.Dropdown>
            </Popover>
          </List.Item>
        );
      })}
    </List>
  </section>
);
