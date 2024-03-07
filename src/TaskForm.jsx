import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "./Context/TaskContext";

function TaskForm(/* { createTask } */) {
  /* se lo paso por context */
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const { createTask } = useContext(TaskContext); //le cargo la funcion cargada en el context

  const handleSubmit = (e) => {
    e.preventDefault(); //para evitar el comportamiento por default del formulario q me recarga la pagina al enviar//
    createTask({ title, description });
    settitle(""); // Limpiar el input después de enviar
    setdescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold mb-3 text-white">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          value={title}
          autoFocus
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Escribe la descripcion de tu tarea"
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
        ></textarea>
        <button type="submit" className="bg-indigo-500 px-3 py-1 text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
