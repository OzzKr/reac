import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// const defaultTodos = [
//   { text: "Algorithms", completed: true },
//   { text: "Frontend React", completed: false },
//   { text: "Backend compiled", completed: false },
//   { text: "JavaScript", completed: false },
//   { text: "Grabar Canción Guitarra", completed: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

// localStorage.removeItem("TODOS_V1");

function App() {
  // console.log("function app");

  let localTodos = localStorage.getItem("TODOS_V1");
  // console.log(localTodos);

  if (!localTodos) {
    const defaultTodos = [];

    localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
    localTodos = localStorage.getItem("TODOS_V1");
  }

  let parsedTodos = JSON.parse(localTodos);
  // console.log(parsedTodos);

  const [todoItems, setTodoItems] = React.useState(parsedTodos);

  // const [todoItems, setTodoItems] = React.useState(defaultTodos);
  const [SearchValue, setSearchValue] = React.useState("");

  let completedTodos = todoItems.filter((todo) => !!todo.completed).length;

  let totalTodos = todoItems.length;

  const searchedTodos = todoItems.filter((todo) => {
    const todotoSearch = SearchValue.toLocaleLowerCase();
    const todoFinder = todo.text.toLowerCase();
    const todoFinded = todoFinder.includes(todotoSearch);
    return todoFinded;
  });

  const completeTodo = (text) => {
    const newTodos = [...todoItems];

    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos[todoIndex].completed = newTodos[todoIndex].completed
      ? false
      : true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todoItems];

    const todoIndex = newTodos.findIndex(
      (todo) => todo.text.toLowerCase() === text.toLowerCase()
    );

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const saveTodos = (newTodos) => {
    setTodoItems(newTodos);
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch SearchValue={SearchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
