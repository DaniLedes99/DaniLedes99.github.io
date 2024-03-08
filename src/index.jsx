import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TaskContextProvider } from "./Context/TaskContext.jsx";
import "./index.css";

//rfce para crear componente//

const user = [
  {
    id: 1,
    name: "Ryan",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/user2",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <TaskContextProvider>
    <App />
  </TaskContextProvider>
);
