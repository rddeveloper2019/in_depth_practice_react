import "./app.css";
import { useState } from "react";
import { DarkModeContext } from "./DarkModeContext.js";
import { MainComponent } from "./MainComponent.jsx";
import { DarkModeProvider } from "./DarkModeProvider.jsx";

export const App = () => {
  return (
    <DarkModeProvider>
      <MainComponent />
    </DarkModeProvider>
  );
};
