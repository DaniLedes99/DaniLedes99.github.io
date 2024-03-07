import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button.jsx";
import TaskCardRobot from "./TaskCardRobot.jsx";
import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm.jsx";
import "tailwindcss/tailwind.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState("");
  const [counter, setCounter] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleEnviarClick = (e) => {
    setMensajeEnviado(inputValue);
    e.preventDefault();
  };

  const Posts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const handleContador = () => {
    setCounter(counter + 1);
  };

  /*   useEffect(() => {
    console.log("render");
  });  //se realiza una función o se renderiza algo q me indique mi useeffect cada vez que algo cambie dentro de app//
  useEffect(() => {
    console.log("render");
  },[]); //se renderiza una sola vez sin importar cuantas veces cambie algo dentro de la funcion app, esto para un fetch// */

  useEffect(() => {
    console.log("render");
  }, [counter]); //acá se muestra una dependencia, porque se renderiza dependiendo si counter cambia o no de valor//

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm /* createTask={createTask} */ />
        {/* ya no necesito pasarles funciones ni nada porque los voy a pasar por context */}
        <TaskList /* tasks={tasks} deleteTask={deleteTask} */ />
      </div>

      <TaskCardRobot ready={true} />
      <Button text="click me" name="oliwisss" />
      <Button text="Pay" />
      <Button text="SUMA" name="" onClick={handleContador} />
      <h1>{counter}</h1>
      <button onClick={Posts}>ENVIAR</button>

      <form onSubmit={handleEnviarClick}>
        <input
          type="text"
          value={inputValue}
          placeholder="Escribe algo..."
          onChange={handleInputChange}
        />
      </form>
      <p>Escribiste: {mensajeEnviado}</p>
    </main>
  );
}

export default App;
