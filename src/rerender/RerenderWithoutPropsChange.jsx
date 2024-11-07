import { useState } from "react";
import { Rerenderable } from "./Rerenderable.jsx";

export const RerenderWithoutPropsChange = () => {
  const [, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue((old) => old + 1)}>
        Click to re-render
      </button>
      <Rerenderable />
    </div>
  );
};
