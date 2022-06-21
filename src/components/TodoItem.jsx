import React, { useState } from "react";

export default function TodoItem(props) {
  let [isDone, setIsDone] = useState(false);
  let handleClick = (e) => {
    setIsDone((prev) => {
      return !prev;
    });
  };
  return (
    <li
      onClick={() => {
        handleClick();
        props.onChecked(props.id);
      }}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}
