import React, { useState } from "react";

export default function TodoItem(props) {
  let [isDone, setIsDone] = useState(false);
  let handleClick = (e) => {
    setIsDone((prev) => {
      return !prev;
    });
  };
  return <li onClick={handleClick}>{props.text}</li>;
}
