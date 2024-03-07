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
  <React.StrictMode>
    <TaskContextProvider>
      <App />
      {user.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <img src={user.image}></img>
          </div>
        );
      })}
    </TaskContextProvider>
  </React.StrictMode>
);
