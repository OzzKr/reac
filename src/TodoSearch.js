import React from "react";
import "./TodoSearch.css";

function TodoSearch({ SearchValue, setSearchValue }) {
  return (
    <input
      value={SearchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      placeholder="search ToDo Item here"
      className="TodoSearch"
    />
  );
}

export { TodoSearch };
