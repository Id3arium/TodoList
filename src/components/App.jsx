import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";
function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prev) => {
      return [...prev, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, i) => i !== id);
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((item, i) => (
            <TodoItem key={i} id={i} text={item} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
