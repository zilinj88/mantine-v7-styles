import "@mantine/core/styles.css";
import { LoadingOverlay, MantineProvider} from "@mantine/core"
import { theme } from "./theme"
import { InitialLoader } from "./initial-loader"

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <LoadingOverlay
        visible
        overlayProps={{ backgroundOpacity: 0.5 }}
        loaderProps={{ children: <InitialLoader /> }}
      />
    </MantineProvider>
  );
}
