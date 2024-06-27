import { Stack } from "@mantine/core";
import { RawSheet } from "../../../../types/rawSheet";
import { ProficienciesList } from "../../components/ProficienciesList";
import { PROFICIENCY_GROUP_NAMES } from "../../consts/proficiencyGroupNames.consts";
import { useGeneralProficiecies } from "../../hooks/useGeneralProficiecies";

type Props = {
  sheet: RawSheet;
};

export const GeneralProficienciesPage = ({ sheet }: Props) => {
  const { senses, ...listProficiencies } = useGeneralProficiecies(sheet);

  const ownedSenses = Object.entries(senses).filter(
    ([, senseValue]) => senseValue !== null
  );

  return (
    <Stack component={"section"}>
      {Object.entries(listProficiencies)
        .filter(([, proficiencies]) => proficiencies.length > 0)
        .map(([proficiencyID, proficiencies]) => {
          const groupName = PROFICIENCY_GROUP_NAMES[proficiencyID];

          return (
            <ProficienciesList
              key={groupName}
              title={groupName}
              items={proficiencies}
            />
          );
        })}

      {ownedSenses.length > 0 ? (
        <ProficienciesList
          title="Senses"
          items={ownedSenses.map(
            ([senseID, senseValue]) =>
              `${senseID.toUpperCase()} | ${senseValue}`
          )}
        />
      ) : null}
    </Stack>
  );
};
