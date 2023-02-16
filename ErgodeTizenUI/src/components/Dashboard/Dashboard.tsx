import React, { useState } from "react";
import { useEffect } from "react";
import { useErgode } from "../../hooks";
import { createWebNode } from "@ergode/node";
import { MantineProvider, Text, Header, Title, Button } from "@mantine/core";

const _log = window.console.log;

function Dashboard() {
  const { ergode, setErgode } = useErgode();
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    window.console.log = function (...args: string[]) {
      setLogs((logs) => [...logs, ...args]);
      _log(...args);
    };
  }, []);

  function onClick() {
    if (ergode) {
      return;
    }

    const node = createWebNode(
      {
        networkType: "devnet",
        config: {
          peers: { knownAddrs: ["/ip4/10.0.2.2/tcp/9020"] },
          logging: { console: { level: "DEBUG" } },
        },
      },
      { bridgeAddr: "/ip4/10.0.2.2/tcp/8109/ws" }
    );

    node.start().then(() => setErgode(node));
  }

  // 2 other components
  // - ergode detail
  // - console logging window?
  // - peers list
  return (
    <>
      <>{ergode ? <Text>Ergode running!</Text> : <Text>Ergode stopped</Text>}</>
      <Button disabled={!!ergode} onClick={onClick}>
        Start node
      </Button>
      <Text>Output</Text>
      {logs.map((l, index) => {
        return <Text key={index}>{l}</Text>;
      })}
    </>
  );
}

export default Dashboard;
