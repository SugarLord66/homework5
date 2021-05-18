import React from "react";
import ReactDOM from "react-dom";
import funny from "./1592412723965.jpg";

import ToDoList from "./components/ToDoList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <img src={funny} alt="funny"/>
      <ToDoList />
    </div>
    
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
