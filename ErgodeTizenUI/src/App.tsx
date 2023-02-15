import React from "react";
import { Suspense } from "react";
import { MantineProvider, Text, Header } from "@mantine/core";
import { Button } from "@mantine/core";

function App() {
  return (
    <React.StrictMode>
      <Suspense fallback="loading">
        <MantineProvider withNormalizeCSS withGlobalStyles>
          <Text weight={500} size="lg">
            Hello world!
          </Text>
          <Button>Click me!</Button>
          <Header height={500}>Testing again</Header>
        </MantineProvider>
      </Suspense>
    </React.StrictMode>
  );
}

export default App;
