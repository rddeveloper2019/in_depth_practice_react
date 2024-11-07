import { Button } from "./Button.jsx";
import { useDarkMode } from "./useDarkMode.js";

export const ToggleButton = () => {
  const toggle = useDarkMode((ctx) => ctx.toggle);
  return <Button onClick={toggle}>Toggle mode</Button>;
};
