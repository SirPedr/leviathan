import { useRouterState } from "@tanstack/react-router";
import { useBasicCharacterInformation } from "../../../basicInformation/hooks/useBasicCharacterInformation/useBasicCharacterInformation";
import { CharacterSheet } from "../../../../types/characterSheet";
import { Divider, Flex, Text, Title } from "@mantine/core";
import classes from "./index.module.css";
import { formatChosenClassesList } from "../../helpers/formatChosenClassesList";
import { formatMulticlassLevels } from "../../helpers/formatMulticlassLevels";
import { TraitLabel } from "../../../../components/TraitLabel";
import { IconHeart, IconShield } from "@tabler/icons-react";

export const CharacterPage = () => {
  const routerState = useRouterState();
  const basicInformation = useBasicCharacterInformation(
    routerState.location.state.sheet as CharacterSheet
  );

  return (
    <main className={classes.characterPage}>
      <header className={classes.characterPageHeader}>
        <Title order={1} className={classes.characterPageTitle}>
          Character Sheet
        </Title>
      </header>

      <section>
        <Title order={2} className={classes.characterPageName}>
          {basicInformation.name}
        </Title>

        <Text className={classes.characterPageClassText}>
          Level {basicInformation.totalLevel}{" "}
          {formatChosenClassesList(
            basicInformation.classes.map((chosenClass) => chosenClass.name)
          )}
        </Text>

        {basicInformation.classes.length > 1 && (
          <Text className={classes.characterPageClassText}>
            ({formatMulticlassLevels(basicInformation.classes)})
          </Text>
        )}

        <Divider my="md" />

        <Flex
          justify="space-between"
          className={classes.characterPageBasicTraits}
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
    </main>
  );
};
3;
