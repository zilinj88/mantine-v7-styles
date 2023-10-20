import { type JSX } from "react";
import { hover150 } from "./hover.css";
import { Box, Group, Stack } from "@mantine/core";

function HoverComp(): JSX.Element {
  return (
    <Group w={400} h={100} align='stretch' className={hover150.hover}>
      <Box bg="red" style={{ flex: 1 }} className={hover150.appear}>
        Hover Content
      </Box>
      <Box bg="orange" style={{ flex: 1 }}>
        Non Hover Content
      </Box>
    </Group>
  );
}

export function HoverTest(): JSX.Element {
  return (
    <Stack gap={10}>
      {new Array(5).fill(1).map((_, index) => (
        <HoverComp key={index} />
      ))}
    </Stack>
  );
}
