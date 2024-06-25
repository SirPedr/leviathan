import { Divider, Flex, List, Tabs, Text, Title } from "@mantine/core";
import { IconHeart, IconShield } from "@tabler/icons-react";
import { useRouterState } from "@tanstack/react-router";
import { TraitLabel } from "../../../../components/TraitLabel";
import { RawSheet } from "../../../../types/rawSheet.ts";
import { AbilityModifier } from "../../../basicInformation/components/AbilityModifier/index.tsx";
import { CharacterBasicInformationContext } from "../../../basicInformation/contexts/characterBasicInformationContext/index.ts";
import { useBasicCharacterInformation } from "../../../basicInformation/hooks/useBasicCharacterInformation/useBasicCharacterInformation";
import { FeaturesPage } from "../../../features/pages/FeaturesPage/index.tsx";
import { SkillsPage } from "../../../skills/pages/SkillsPage.tsx";
import { formatChosenClassesList } from "../../helpers/formatChosenClassesList";
import { formatMulticlassLevels } from "../../helpers/formatMulticlassLevels";
import classes from "./index.module.css";

export const CharacterPage = () => {
  const routerState = useRouterState();
  const sheet = routerState.location.state.sheet as RawSheet;
  const basicInformation = useBasicCharacterInformation(sheet);

  return (
    <CharacterBasicInformationContext.Provider value={basicInformation}>
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

        <Tabs
          defaultValue="skills"
          classNames={{
            root: classes.characterPageTabs,
            tab: classes.characterPageTab,
            list: classes.characterPageTabList,
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="skills">Skills</Tabs.Tab>
            <Tabs.Tab value="features">Features</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="skills">
            <SkillsPage sheet={sheet} />
          </Tabs.Panel>
          <Tabs.Panel value="features">
            <FeaturesPage sheet={sheet} />
          </Tabs.Panel>
        </Tabs>
      </main>
    </CharacterBasicInformationContext.Provider>
  );
};
3;
