import { Divider, Pill, Text } from "@mantine/core";
import React from "react";
import { CollapsibleGroup } from "../../../../components/CollapsibleGroup";
import { RawSheet } from "../../../../types/rawSheet";
import { GROUP_FRIENDLY_NAMES } from "../../consts/featureGroups.consts";
import { useFeatures } from "../../hooks/useFeatures";
import classes from "./index.module.css";

type Props = {
  sheet: RawSheet;
};

export const FeaturesPage = ({ sheet }: Props) => {
  const grupedFeatures = useFeatures(sheet);

  return Object.entries(grupedFeatures).map(([groupKey, features]) => (
    <CollapsibleGroup
      name={GROUP_FRIENDLY_NAMES[groupKey]}
      className={classes.featureGroup}
      key={groupKey}
    >
      {features.map((feat, index) => (
        <React.Fragment key={feat.name}>
          <CollapsibleGroup.Item
            title={
              <Text>
                {feat.name}{" "}
                {feat.uses && (
                  <Pill ml="sm">
                    {feat.uses.current}/{feat.uses.max}
                  </Pill>
                )}
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
