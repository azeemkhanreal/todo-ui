import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const saveTask = () => {
    setTask([...task, input]);
    setInput("");
  };
  console.log(task);
  return (
    <div className="App">
      <h1>Write Task </h1>
      <div className="todo_form">
        <form>
          <input type="text" value={input} onChange={(e) => handleInput(e)} />
        </form>
      </div>
      <div className="todo_list">
        {task.map((item, index) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="todoButtons">
        <button onClick={saveTask}>Add Task</button>
        <button>Delete Task</button>
      </div>
    </div>
  );
};

export default App;
