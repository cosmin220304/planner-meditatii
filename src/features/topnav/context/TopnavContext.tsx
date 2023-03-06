import { useState } from "react";
import { createContext, ReactNode } from "react";

export interface TopnavContextInterface {
  isToggled: boolean;
  toggle: () => void;
}

export const TopnavContext = createContext<TopnavContextInterface | undefined>(
  undefined
);

export function TopnavContextWrapper({ children }: { children: ReactNode }) {
  const [isToggled, setIsToggle] = useState(false);

  function toggle() {
    setIsToggle((prev) => !prev);
  }

  return (
    <TopnavContext.Provider value={{ isToggled, toggle }}>
      {children}
    </TopnavContext.Provider>
  );
}
