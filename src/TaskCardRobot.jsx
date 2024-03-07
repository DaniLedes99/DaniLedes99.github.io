import "./estilo.css";

function TaskCardRobot({ ready }) {
  return (
    <div className="card">
      <h1>Mi primer card</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}

export default TaskCardRobot;
