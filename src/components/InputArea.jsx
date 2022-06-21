import React from "react";

export default function InputArea(props) {
  return (
    <div className="form">
      <input type="text" onChange={props.handleChange} value={inputText} />
      <button onClick={props.handleOnClick}>
        <span>Add</span>
      </button>
    </div>
  );
}
