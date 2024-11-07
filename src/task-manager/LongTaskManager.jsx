import { useCallback, useState } from "react";
import { useTaskList } from "./useTaskList.js";
import { useNewTask } from "./useNewTask.js";

export const LongTaskManager = () => {
  const { handleNewTaskChange, handleSubmit, newTask } = useNewTask();
  const { tasks, addTask, toggleTaskCompletion } = useTaskList();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
          placeholder="Add new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              disabled={task.completed}
            />
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
};
