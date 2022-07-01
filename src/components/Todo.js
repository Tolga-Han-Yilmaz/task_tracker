import React, { useState } from "react";

const Todo = ({ todos }) => {
  const [show, setIsShow] = useState(true);
  const [filterText, setFilterText] = useState("");
  const filtered = todos.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const handleClear = (e) => {};
  const handleFinish = () => {
    setIsShow(!show);
  };
  return (
    <div>
      <ul className="lists bg-info">
        {filtered.map((todo, index) => (
          <li
            key={index}
            className="d-flex justify-content-between bg-light mt-3 "
            onClick={handleFinish}
          >
            <div className={show || "text-decoration-line-through"}>
              <h6>{todo.task}</h6>
              <span>{todo.day}</span>
            </div>
            <div className="text-danger" onClick={(e) => handleClear(e)}>
              X
            </div>
          </li>
        ))}
      </ul>

      <p>Total Tasks : {filtered.length}</p>
      <input
        placeholder="search"
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
};

export default Todo;
