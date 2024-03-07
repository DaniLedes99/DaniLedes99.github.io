import TaskCard from "./TaskCard";
import { TaskContext } from "./Context/TaskContext";
import { useContext } from "react";
import "tailwindcss/tailwind.css";
function TaskList(/* {tasks, deleteTask} */) {
  const { /* deleteTask, */ tasks } = useContext(TaskContext);

  if (tasks?.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas aun
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks?.map((task, i) => (
        <TaskCard key={i} task={task} /* deleteTask={deleteTask} */ />
      ))}
    </div>
  );
}

export default TaskList;
