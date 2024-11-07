import { memo, useContext } from "react";
import { DarkModeContext } from "./DarkModeContext.js";
import { Header } from "./Header.jsx";
import { useDarkMode } from "./useDarkMode.js";

export const MainComponent = memo(() => {
  const isDarkMode = useDarkMode((ctx) => ctx.isDarkMode);
  const style = {
    color: isDarkMode ? "white" : "black",
    backgroundColor: isDarkMode ? "black" : "white",
    margin: "-8px",
    minHeight: "100vh",
    boxSizing: "border-box",
  };
  return (
    <main style={style}>
      <Header />
      <h1>Welcome to our business site!</h1>
    </main>
  );
});
