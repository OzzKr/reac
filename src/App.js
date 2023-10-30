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
    setTodoItems(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todoItems];

    const todoIndex = newTodos.findIndex((todo) => todo.text.toLowerCase() === text.toLowerCase());

    newTodos.splice(todoIndex,1);
    setTodoItems(newTodos);
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
