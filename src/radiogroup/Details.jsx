import { RadioOptionContext } from "./contexts.js";
import { useContext } from "react";

export function Details({ children }) {
  const isSelected = useContext(RadioOptionContext);
  return isSelected ? children : null;
}
