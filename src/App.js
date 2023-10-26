import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: "Algorithms", completed: true },
  { text: "Frontend React", completed: false },
  { text: "Backend compiled", completed: false },
  { text: "JavaScript", completed: false },
  { text: "Grabar Canción Guitarra", completed: false },
];

function App() {
  const [SearchValue, setSearchValue] = React.useState("");
  const [todoItems, setTodoItems] = React.useState(defaultTodos);

  let completedTodos = todoItems.filter((todo) => !!todo.completed).length;

  let totalTodos = todoItems.length;

  console.log("the user search for:", SearchValue);

  const searchedTodos = todoItems.filter((todo) => {
    const todotoSearch = SearchValue.toLocaleLowerCase();
    const todoFinder = todo.text.toLowerCase();
    const todoFinded = todoFinder.includes(todotoSearch);
    return todoFinded;
  });

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
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
