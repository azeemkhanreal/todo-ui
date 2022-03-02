import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import "./ListTasks.css";

const ListTasks = ({ data, deleteFunc }) => {
  console.log(deleteFunc);
  return (
    <div className="listTask">
      {data.map((item, index) => (
        <div className="listTask__task">
          <p>{item}</p>
          <button className="editBtn">
            <EditIcon />
          </button>
          <button className="deleteBtn" onClick={() => deleteFunc(index)}>
            <DeleteOutlineIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTasks;
