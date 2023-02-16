import React from "react";
import { Ergode } from "@ergode/node";

interface IErgodeContext {
  ergode: Ergode | undefined;
  setErgode: React.Dispatch<React.SetStateAction<Ergode | undefined>>;
}

const ErgodeContext = React.createContext<IErgodeContext | undefined>(
  undefined
);

interface ErgodeProviderProps {
  children: React.ReactNode;
}

function ErgodeProvider({ children }: ErgodeProviderProps) {
  const [ergode, setErgode] = React.useState<Ergode | undefined>(undefined);

  return (
    <ErgodeContext.Provider value={{ ergode, setErgode }}>
      {children}
    </ErgodeContext.Provider>
  );
}

function useErgode() {
  const ctx = React.useContext(ErgodeContext);

  if (!ctx) {
    throw new Error("useErgode must be within ErgodeProvider");
  }

  return ctx;
}

export { ErgodeProvider, useErgode };
