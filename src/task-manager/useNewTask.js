import { useState } from "react";

export const useNewTask = (task) => {
  const [newTask, setNewTask] = useState("");
  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };
  return { handleNewTaskChange, handleSubmit, newTask };
};
