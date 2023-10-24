import logo from "./platzi.webp";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { ButtonCreateTodo } from "./ButtonCreateTodo";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { ButtonSearchTodo } from "./ButtonSearchTodo";
import React from "react";

const defautlTodos = [
  { text: "curso1", completed: true },
  { text: "curso2", completed: false },
  { text: "curso3", completed: true },
  { text: "curso4", completed: true },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed="5" total="10" />
      <TodoSearch />
      <TodoList>
        {defautlTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <ButtonCreateTodo />
      <ButtonSearchTodo />
    </React.Fragment>
  );
}

export default App;
