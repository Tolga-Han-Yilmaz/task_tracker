import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

const Todo = ({ todos, setTodos, deneme }) => {
  // const [show, setIsShow] = useState(true);
  const [filterText, setFilterText] = useState("");
  const filtered = todos.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const handleDone = (doneID) => {
    console.log(doneID);
    setTodos(
      todos.map((item) =>
        doneID === item.id ? { ...item, idDone: !item.idDone } : item
      )
    );
    console.log(todos);
  };

  const handleDelete = (deleteID) => {
    console.log(deleteID);
    setTodos(todos.filter((item) => deleteID !== item.id));
    console.log(todos);
  };

  return (
    <div>
      <ul>
        {filtered.map((todo) => (
          <li
            key={todo.id}
            className="d-flex justify-content-between bg-light mt-1 rounded "
          >
            <div
              onClick={() => handleDone(todo.id)}
              className={
                todo.idDone && "text-decoration-line-through text-success"
              }
            >
              <h6 className="fw-bold text-capitalize">{todo.task}</h6>
              <span>{todo.day}</span>
            </div>
            <span
              className="text-danger me-3 "
              onClick={() => handleDelete(todo.id)}
              style={{ cursor: "pointer" }}
            >
              <FaTimesCircle />
            </span>
          </li>
        ))}
      </ul>

      <p>
        {filtered.length
          ? `Total Tasks :
        ${filtered.length}`
          : "No Tasks to Show"}
      </p>
      <input
        className="mb-1"
        placeholder="search"
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
};

export default Todo;
