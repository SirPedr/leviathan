import { IconHeart, IconShield } from "@tabler/icons-react";
import { TraitLabel } from "../../../../components/TraitLabel";
import { useBasicCharacterInfoContext } from "../../hooks/useCharacterBasicInfoContext";
import { Divider, Flex, List, Text, Title } from "@mantine/core";
import { AbilityModifier } from "../../components/AbilityModifier";
import { formatMulticlassLevels } from "../../../character/helpers/formatMulticlassLevels";
import { formatChosenClassesList } from "../../../character/helpers/formatChosenClassesList";
import classes from "./index.module.css";

export const BasicInformationPage = () => {
  const basicInformation = useBasicCharacterInfoContext();

  return (
    <section>
      <Title order={2} className={classes.basicInformationName}>
        {basicInformation.name}
      </Title>

      <Text className={classes.basicInformationClassText}>
        Level {basicInformation.totalLevel}{" "}
        {formatChosenClassesList(
          basicInformation.classes.map((chosenClass) => chosenClass.name)
        )}
      </Text>

      {basicInformation.classes.length > 1 && (
        <Text className={classes.basicInformationClassText}>
          ({formatMulticlassLevels(basicInformation.classes)})
        </Text>
      )}

      <Divider my="md" />

      <Flex component={List} justify="space-between" listStyleType="none">
        {Object.entries(basicInformation.modifiers).map(
          ([abilityName, abilityModifier]) => (
            <AbilityModifier
              key={abilityName}
              name={abilityName}
              value={abilityModifier}
            />
          )
        )}
      </Flex>

      <Divider my="md" />

      <Flex
        justify="space-between"
        className={classes.basicInformationBasicTraits}
      >
        <TraitLabel
          icon={<IconHeart />}
          title="Total HP"
          description={basicInformation.hp}
        />
        <TraitLabel
          icon={<IconShield />}
          title="Armor Class"
          description={basicInformation.armorClass}
        />
      </Flex>
    </section>
  );
};
