import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./ListTasks.scss";
import Moment from "react-moment";

const ListTasks = ({ tasks, deleteFunc }) => {
  console.log(deleteFunc);
  return (
    <div className="listTask">
      {tasks.map((task, index) => (
        <div key={index} className="listTask__task">
          <div className="listTask__content">
            <p>{task.content}</p>
            <Moment className="listTask__time" fromNow>
              {task.createdOn}
            </Moment>
          </div>
          <button className="deleteBtn" onClick={() => deleteFunc(index)}>
            <DeleteOutlineIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTasks;
