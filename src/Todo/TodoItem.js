import "../css/TodoItem.css";
function TodoItem(props) {
  const checkIconClass = props.completed ? "green-icon" : "gray-icon";
  const deleteButtonClass = props.completed ? "red-icon" : "gray-icon";
  return (
    <li className="todo-item">
      <span className={`check ${checkIconClass}`} role="img" aria-label="Check">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill={props.completed ? "#009900" : "#808080"}
            d="M10 18l-6-6 1.41-1.41L10 15.17l8.59-8.59L20 7l-10 10z"
          />
        </svg>
      </span>

      <p
        className="todo-text"
        style={{ textDecoration: props.completed ? "line-through" : "none" }}
      >
        {props.text}
      </p>

      <span
        className={`delete ${deleteButtonClass}`}
        role="img"
        aria-label="Delete"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill={props.completed ? "#FF0000" : "#808080"}
            d="M18 6L6 18M6 6l12 12"
            stroke={props.completed ? "#FF0000" : "#808080"}
            stroke-width="2"
          />
        </svg>
      </span>
    </li>
  );
}

export { TodoItem };
