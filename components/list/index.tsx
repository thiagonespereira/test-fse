import { ListRecord } from "@/app/page";
import { Card, Flex, Text } from "@radix-ui/themes";

interface ListComponentProps {
  items: ListRecord[];
}

export default function ListComponent({ items }: ListComponentProps) {
  return (
    <div>
      {items.map((item, index) => (
        <Card style={{ width: 500 }} key={index} variant="surface">
          <Flex gap="3" align="center" justify={"between"} direction={"row"}>
              <Text as="div" size="2" weight="bold">
                {item.name}
              </Text>
              <Text as="div" size="2" color="gray">
                {item.email}
              </Text>
          </Flex>
        </Card>
      ))}
    </div>
  );
}
