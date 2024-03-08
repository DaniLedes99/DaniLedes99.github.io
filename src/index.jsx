import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TaskContextProvider } from "./Context/TaskContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>
);
