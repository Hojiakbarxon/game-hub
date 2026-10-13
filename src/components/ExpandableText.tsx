import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  const limit = 300;
  let [expanded, setExpanded] = useState(false);

  const summary = expanded ? children : children.substring(0, 300) + "...";

  if (!children) return null;

  if (children.length <= 300) {
    return <Text>{children}</Text>;
  } else {
    return (
      <Text>
        {summary}
        <Button
          onClick={() => setExpanded(!expanded)}
          marginLeft={1}
          size={"xs"}
          fontWeight={"bold"}
          colorScheme="yellow"
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      </Text>
    );
  }
}

export default ExpandableText;
