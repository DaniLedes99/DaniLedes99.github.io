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

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
