import React, { useState } from "react";
import ListTasks from "./components/ListTasks";
import "./App.scss";

const App = () => {
  const [task, setTask] = useState([]); //
  const [input, setInput] = useState();
  // when user enter add task button then addTask function take input and set into input state
  const addTask = (e) => {
    e.preventDefault();
    let currTime = new Date().toString();
    if (input) {
      setTask([...task, { content: input, createdOn: currTime }]);
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
  const editTask = (index, editInput) => {
    if (!task[index].editable) {
      task[index].editable = true;
    }
    task[index].name = editInput;
  };
  console.log(task);
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
          <ListTasks tasks={task} deleteFunc={deleteTask} editFunc={editTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
