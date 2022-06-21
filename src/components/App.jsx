import React, { useState } from "react";
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
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={handleOnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <TodoItem text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
