function TodoItem(props) {
  return (
    <li>
      <span>V</span>
      <p>{props.text}</p>
      <p>{props.completed}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };
