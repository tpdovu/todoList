import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");

  const [todoItems, updateTodoItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }

  function handleOnClick() {
    updateTodoItems((oldArray) => {
      return [...oldArray, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} onChange={handleChange} type="text" />
        <button value="update" onClick={handleOnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoItems.map((todoItem, i) => {
            return <li key={i}>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
