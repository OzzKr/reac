import react from "react";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./TodoItem.css";

function TodoItem(props, { todoItems, setTodoItems }) {
  return (
    <li className="TodoItem" id={"item_" + props.text}>
      <CompleteIcon />

      {/* <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${
          props.completed && "Icon Icon-check--active"
        }`}
      >
        V
      </span> */}
      <p
        id={props.text}
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.text}
      </p>
      <DeleteIcon />

      {/* <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span> */}
    </li>
  );
}

export { TodoItem };
