import { DarkModeContext } from "./DarkModeContext.js";
import { useCallback, useState } from "react";

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggle = useCallback(() => setDarkMode((v) => !v), []);

  const contextValue = { toggle, isDarkMode };
  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};
