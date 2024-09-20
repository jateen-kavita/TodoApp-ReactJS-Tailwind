import React from "react";
import Todo from "./Components/Todo";
import "./index.css";

const App = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <Todo />
    </div>
  );
};

export default App;
