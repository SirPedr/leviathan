import { Divider, Table, Text } from "@mantine/core";
import { RawSheet } from "../../../../types/rawSheet";
import { useCurrencies } from "../../hooks/useCurrencies";
import { capitalize } from "../../../../helpers/capitalize";
import classes from "./index.module.css";
import { useInventory } from "../../hooks/useInventory";
import { CollapsibleGroup } from "../../../../components/CollapsibleGroup";

type Props = {
  sheet: RawSheet;
};

export const InventoryPage = ({ sheet }: Props) => {
  const currencies = useCurrencies(sheet);
  const inventoryItems = useInventory(sheet);

  return (
    <section>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th c="yellow.4">Currency</Table.Th>
            <Table.Th
              c="yellow.4"
              className={classes.currencyTableHeaderAlignRight}
            >
              Amount
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {Object.entries(currencies).map(([currencyName, currencyAmount]) => (
            <Table.Tr key={currencyName}>
              <Table.Td align="left">{capitalize(currencyName)}</Table.Td>
              <Table.Td align="right">{currencyAmount}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <CollapsibleGroup
        name="Inventory content"
        className={classes.inventoryItems}
      >
        {inventoryItems.map((item) => {
          console.log({
            description: item.description || "No description available.",
          });
          const formattedQuantity =
            item.type === "consumable" || item.quantity > 1
              ? ` (${item.quantity})`
              : "";

          return (
            <CollapsibleGroup.Item title={`${item.name}${formattedQuantity}`}>
              {item.description || "No description available."}
            </CollapsibleGroup.Item>
          );
        })}
      </CollapsibleGroup>
    </section>
  );
};
