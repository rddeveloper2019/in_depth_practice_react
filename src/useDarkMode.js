import { DarkModeContext } from "./DarkModeContext.js";
import { useContextSelector } from "use-context-selector";

export const useDarkMode = (selector) => {
  return useContextSelector(DarkModeContext, selector);
};
