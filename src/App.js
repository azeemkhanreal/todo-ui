import React, { useState } from "react";
import ListTasks from "./components/ListTasks";
import "./App.css";

const App = () => {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState();
  // when user enter add task button then addTask function take input and set into input state
  const addTask = (e) => {
    e.preventDefault();
    if (input) {
      setTask([...task, input]);
      setInput("");
    }
  };
  // handle input value and set value into input state
  const handleInput = (value) => {
    setInput(value);
  };

  const deleteTask = (key) => {
    let tasks = task.filter((item, index) => index !== key);
    setTask([...tasks]);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="todo-title">Todo's Task</h1>
        <div className="todo-form">
          <form onSubmit={addTask}>
            <input
              type="text"
              value={input}
              onChange={(event) => handleInput(event.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
          </form>
        </div>
        <div className="todo-list">
          <ListTasks data={task} deleteFunc={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
