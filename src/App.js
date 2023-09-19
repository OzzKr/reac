import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { ButtonCreateTodo } from './ButtonCreateTodo';
import { TodoList } from './TodoList';
import { TodoItem } from "./TodoItem";

function App() {
  return (
    <div className="App">

      <TodoCounter />

      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <ButtonCreateTodo />

    </div>
  );
}

export default App;