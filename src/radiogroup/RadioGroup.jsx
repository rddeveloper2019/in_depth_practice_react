import { useState } from "react";
import { Details } from "./Details.jsx";
import { Option } from "./Option.jsx";
import { RadioGroupContext } from "./contexts.js";

export const RadioGroup = ({ name, options, onChange, children }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (value) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };
  const contextValue = {
    name,
    selectedValue,
    onChange: handleChange,
  };
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
