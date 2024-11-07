import "./app.css";
import { RerenderWithoutPropsChange } from "./rerender/RerenderWithoutPropsChange.jsx";
import { NoRerenderWithPropsChange } from "./rerender/NoRerenderWithPropsChange.jsx";

export const App = () => {
  return (
    <main>
      <h4>Re-renders without changing properties</h4>
      <RerenderWithoutPropsChange />
      <h4>No re-render with changing properties</h4>
      <NoRerenderWithPropsChange />
    </main>
  );
};
