import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState();
  const [task, setTask] = useState([]);

  const handleInput = (value) => {
    setInput(value);
  };
  const addTask = (e) => {
    e.preventDefault();
    setTask([...task, input]);
    setInput("");
  };

  const deleteTask = (key) => {
    let tasks = task.filter((item, index) => index !== key);
    setTask([...tasks]);
  };

  console.log(task);
  return (
    <div className="App">
      <h1>Write Task</h1>
      <div className="todo_form">
        <form onSubmit={addTask}>
          <input
            type="text"
            value={input}
            onChange={(event) => handleInput(event.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </form>
      </div>

      <div className="todo_list">
        {task.map((item, index) => (
          <>
            <p>{item}</p>
            <button onClick={() => deleteTask(index)}>Delete Task</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default App;
