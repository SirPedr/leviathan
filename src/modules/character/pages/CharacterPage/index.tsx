import { Tabs, Title } from "@mantine/core";
import { useRouterState } from "@tanstack/react-router";
import { RawSheet } from "../../../../types/rawSheet.ts";
import { CharacterBasicInformationContext } from "../../../basicInformation/contexts/characterBasicInformationContext/index.ts";
import { useBasicCharacterInformation } from "../../../basicInformation/hooks/useBasicCharacterInformation/useBasicCharacterInformation";
import { BasicInformationPage } from "../../../basicInformation/pages/BasicInformationPage/index.tsx";
import { FeaturesPage } from "../../../features/pages/FeaturesPage/index.tsx";
import { SkillsPage } from "../../../skills/pages/SkillsPage.tsx";
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

        <BasicInformationPage />

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
