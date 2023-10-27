import "./TodoItem.css";

// function deleteTodo(key) {
//   let itemText = document.getElementById("item_" + key);
//   itemText.style = "display:none";
// }

// function completeTodo(target, propText) {
//   let itemText = document.getElementById(propText);
//   if (itemText.className === "TodoItem-p TodoItem-p--complete") {
//     itemText.className = "TodoItem-p";
//     target.className = "Icon Icon-check";
//     target.completed = false;
//   } else {
//     itemText.className = "TodoItem-p TodoItem-p--complete";
//     target.className = "Icon Icon-check Icon-check--active";
//     target.completed = true;
//   }
// }

function TodoItem(props, { todoItems, setTodoItems }) {
  // const complete = () => {
  //   console.log("anonym complete");
  // };

  return (
    <li className="TodoItem" id={"item_" + props.text}>
      <span
        // onClick={(event) => completeTodo(event.target, props.text)}
        onClick={props.onComplete}
        className={`Icon Icon-check ${
          props.completed && "Icon Icon-check--active"
        }`}
      >
        V
      </span>
      <p
        id={props.text}
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        //onClick={(event) => deleteTodo(props.text)}
        onClick = {props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
