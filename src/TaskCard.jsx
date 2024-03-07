import React, { useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
import "tailwindcss/tailwind.css";

function TaskCard({ task /* deleteTask */ }) {
  const { deleteTask } = useContext(TaskContext);

  function handleClick() {
    deleteTask(task.id);
  }
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2>{task.id}</h2>
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 roundend-md mt-4 hover:bg-red-400"
        onClick={handleClick}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
