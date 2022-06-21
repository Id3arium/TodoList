import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(e) {
    setInputText(e.target.value);
  }
  function handleOnClick(e) {
    setItems((prev) => {
      return [...prev, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, i) => item !== id);
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea on />
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
