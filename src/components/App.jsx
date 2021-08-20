import React, { useState } from "react";
import ListItem from "./ListItem";
import InputText from "./InputText";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputText onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ListItem
              key={index}
              id={index}
              item={todoItem}
              delete={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
