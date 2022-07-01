import React, { useState } from "react";

const Todo = ({ todos,setTodos }) => {
  // const [show, setIsShow] = useState(true);
  const [filterText, setFilterText] = useState("");
  const filtered = todos.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  // const handleClear = (e) => {};
  // const handleFinish = () => {
  //   setIsShow(!show);
  // };

  const handleDone = (doneID) => {
    console.log(doneID);
    setTodos(todos.map((item) => doneID===item.id ? {...item,idDone:!item.idDone} : item ));
    console.log(todos);
  }

  const handleDelete = (deleteID) =>{
    console.log(deleteID);
    setTodos(todos.filter((item) => deleteID!==item.id))
    console.log(todos);
  }
  return (
    <div>
      <ul className="lists bg-info">
        {filtered.map((todo) => (
          <li
            key={todo.id}
            className="d-flex justify-content-between bg-light mt-3 "
            
          >
            <div onClick={() => handleDone(todo.id)} className={todo.idDone && "text-decoration-line-through"}>
              <h6>{todo.task}</h6>
              <span>{todo.day}</span>
            </div>
            <span className="text-danger" onClick={() =>handleDelete(todo.id)} style={{cursor:"pointer"}}>
              X
            </span>
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
