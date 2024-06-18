import { Box, Divider, Group, List, Pill, Text } from "@mantine/core";
import { CollapsibleGroup } from "../../../../components/CollapsibleGroup";
import { CharacterSheet } from "../../../../types/characterSheet";
import { GROUP_FRIENDLY_NAMES } from "../../consts/featureGroups.consts";
import { useFeatures } from "../../hooks/useFeatures";
import React from "react";

type Props = {
  character: CharacterSheet;
};
export const FeaturesPage = ({ character }: Props) => {
  const grupedFeatures = useFeatures(character);

  return Object.entries(grupedFeatures).map(([groupKey, features]) => (
    <CollapsibleGroup name={GROUP_FRIENDLY_NAMES[groupKey]}>
      {features.map((feat, index) => (
        <React.Fragment>
          <CollapsibleGroup.Item
            title={
              <Text>
                {feat.name}{" "}
                {feat.usageCost && <Pill ml="sm">{feat.usageCost}</Pill>}
              </Text>
            }
            key={feat.name}
          >
            {feat.description}
          </CollapsibleGroup.Item>

          {index !== features.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </CollapsibleGroup>
  ));
};
