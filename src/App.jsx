import "./app.css";
import { useState } from "react";
import { RadioGroup } from "./radiogroup/index.js";

export const App = () => {
  const [data, setData] = useState({
    meal: "",
    bread: "",
    side: "",
    beverage: "",
  });
  const onChange = (name) => (value) => setData({ ...data, [name]: value });

  const meals = [
    { value: "small", label: "Small: $5.99" },
    { value: "medium", label: "Medium: $7.99" },
    { value: "large", label: "Large: $9.99" },
  ];
  const breads = [
    { value: "bagel", label: "Bagel" },
    { value: "roll", label: "Roll" },
    { value: "croissant", label: "Croissant", isPopular: true },
  ];
  const sides = [
    { value: "avocado", label: "Avocado", icon: " " },
    { value: "bacon", label: "Bacon", icon: " " },
  ];
  const beverages = [
    { value: "orangejuice", label: "Orange Juice" },
    {
      value: "coffee",
      label: "Coffee",
      details: (
        <select name="coffee_size">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      ),
    },
  ];

  return (
    <main className="container">
      <h1>Breakfast ordering</h1>

      <h2>Meal</h2>
      <RadioGroup name="meal" onChange={onChange("meal")}>
        <RadioGroup.Option value="small">Small: $5.99</RadioGroup.Option>
        <RadioGroup.Option value="medium">Medium: $7.99</RadioGroup.Option>
        <RadioGroup.Option value="large">Large: $9.99</RadioGroup.Option>
      </RadioGroup>
      <h2>Bread</h2>
      <RadioGroup name="bread" onChange={onChange("bread")}>
        <RadioGroup.Option value="bagel">Bagel</RadioGroup.Option>
        <RadioGroup.Option value="roll">Roll</RadioGroup.Option>
        <RadioGroup.Option value="croissant" isPopular>
          Croissant
        </RadioGroup.Option>
      </RadioGroup>
      <h2>Side</h2>
      <RadioGroup name="side" onChange={onChange("side")}>
        <RadioGroup.Option value="avocado" icon="🥑">
          Avocado
        </RadioGroup.Option>
        <RadioGroup.Option value="bacon" icon="🥓">
          Bacon <em>(+ $0.99)</em>
        </RadioGroup.Option>
      </RadioGroup>
      <h2>Beverage</h2>
      <RadioGroup name="beverage" onChange={onChange("beverage")}>
        <RadioGroup.Option value="orangejuice">Orange Juice</RadioGroup.Option>
        <RadioGroup.Option value="coffee">
          Coffee
          <RadioGroup.Details>
            <select name="coffee_size">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </RadioGroup.Details>
        </RadioGroup.Option>
      </RadioGroup>
    </main>
  );
};
