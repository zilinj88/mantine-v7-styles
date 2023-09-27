import { Button } from "@mantine/core";
import React from "react";

export const InlineStylingComp: React.FC = () => {
  return (
    <Button
      styles={(theme) => ({
        root: {
          margin: theme.spacing.xl,
        },
      })}
    >
      Inline Styled Button
    </Button>
  );
};
