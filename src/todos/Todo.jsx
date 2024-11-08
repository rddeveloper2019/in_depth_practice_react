import { useCallback, useMemo, useState } from "react";
import { Items } from "./Items.jsx";

export const Todo = () => {
  const [items, setItems] = useState(["Clean gutter", "Do dishes"]);
  const [newItem, setNewItem] = useState("");
  const onSubmit = (evt) => {
    setItems((items) => items.concat([newItem]));
    setNewItem("");
    evt.preventDefault();
  };
  const onChange = (evt) => setNewItem(evt.target.value);
  const allItems = useMemo(() => ["Complete todo list", ...items], [items]);
  const onDelete = useCallback(
    (item) => setItems((list) => list.filter((i) => i !== item)),
    [],
  );

  return (
    <main>
      <Items items={allItems} onDelete={onDelete} />
      <form onSubmit={onSubmit}>
        <input value={newItem} onChange={onChange} />
        <button>Add</button>
      </form>
    </main>
  );
};
