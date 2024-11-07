import { useState } from "react";
import { Details } from "./Details.jsx";
import { Option } from "./Option.jsx";
import { RadioGroupContext } from "./contexts.js";
import { useContextValue } from "./useContextValue.js";

export const RadioGroup = ({ name, options, onChange, children }) => {
  const contextValue = useContextValue({ name, onChange });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <RadioGroupContext.Provider value={contextValue}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
};

RadioGroup.Option = Option;
RadioGroup.Details = Details;
