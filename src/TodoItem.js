import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./TodoItem.css";

function TodoItem(props, { todoItems, setTodoItems }) {
  return (
    <li className="TodoItem" id={"item_" + props.text}>
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />

      <p
        id={props.text}
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
