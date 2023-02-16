import React from "react";
import { Suspense } from "react";
import { MantineProvider } from "@mantine/core";
import { ErgodeProvider } from "./hooks";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Suspense fallback="loading">
      <ErgodeProvider>
        <MantineProvider
          theme={{ colorScheme: "dark" }}
          withNormalizeCSS
          withGlobalStyles
        >
          <Dashboard />
        </MantineProvider>
      </ErgodeProvider>
    </Suspense>
  );
}

export default App;
