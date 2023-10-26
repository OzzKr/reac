import React, { useState } from "react";
import "./TodoSearch.css";

const [state, setState] = React.useState();

function TodoSearch() {
  return (
    <input
      onChange={(event) => console.log(event.target.value)}
      placeholder="search ToDo Item here"
      className="TodoSearch"
    />
  );
}

export { TodoSearch };
