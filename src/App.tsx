import { LoadingOverlay, MantineProvider, Stack, Title} from "@mantine/core"
import { theme } from "./theme"
import { InitialLoader } from "./initial-loader"
import { DatePickerInput } from "@mantine/dates";
import { SelectInModal } from "./modal-test";
import { HoverTest } from "./hover-test";
import { MantineTable, NormalTable } from "./table";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Stack>
        <Title>Normal Table</Title>
        <NormalTable/>
        <Title>Mantine Table</Title>
        <MantineTable/>
      </Stack>
    </MantineProvider>
  );
}
