import "@mantine/core/styles.css"
import { MantineProvider, Stack } from "@mantine/core"
import { theme } from "./theme"
import { ButtonStyling } from "./button-styling"
import { InlineStylingComp } from "./inline-style-comp"
import { VanillaExtractDemo } from "./vanilla-extract-demo"

export default function App() {
  return <MantineProvider theme={theme}>
    <Stack gap='lg'>
      <ButtonStyling/>
      <InlineStylingComp/>
      <VanillaExtractDemo/>
    </Stack>
    
  </MantineProvider>
}
