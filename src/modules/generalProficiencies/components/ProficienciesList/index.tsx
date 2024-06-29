import { Badge, Divider, Group, Text } from "@mantine/core";

type Props = {
  title: string;
  items: string[];
};

export const ProficienciesList = ({ title, items }: Props) => (
  <section>
    <Text>{title}</Text>
    <Divider mb="sm" />
    <Group>
      {items.map((item, index) => (
        <Badge key={index} size="lg" radius="xs" c="black" fw="900">
          {item}
        </Badge>
      ))}
    </Group>
  </section>
);
