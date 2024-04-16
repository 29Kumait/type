import { useContext } from "react";
import { DarkModeContextType, DarkModeContext } from "./DarkModeContext";

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
