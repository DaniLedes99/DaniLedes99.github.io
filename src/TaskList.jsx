import TaskCard from "./TaskCard";
import { TaskContext } from "./Context/TaskContext";
import { useContext } from "react";
import "tailwindcss/tailwind.css";
import "./card.css";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks?.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas aún
      </h1>
    );
  }

  return (
    <div className="card">
      {tasks?.map((task, i) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
