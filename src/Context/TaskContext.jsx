import React from "react";
import { createContext, useState, useEffect } from "react";
/* import { tasks as data } from "../task.js"; */

const initial = [
  {
    id: 0,
    title: "mi primer tarea",
    description: "mi primera chamba",
  },
  {
    id: 1,
    title: "mi segunda tarea",
    description: "mi segunda chamba",
  },
];

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(initial);

  useEffect(() => {
    setTasks(initial);
  }, []);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      { title: task.title, id: tasks?.length, description: task.description },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
