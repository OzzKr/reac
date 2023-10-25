import "../css/TodoList.css";

function TodoList(props) {
  // Function to open the modal in TodoList
  const openTodoModal = () => {
    const modal = document.getElementById("myModal");

    // Show the modal by changing its style
    if (modal) {
      modal.style.display = "block";
    }
  };

  return (
    <>
      <ul>{props.children}</ul>
      <div className="iconAddTodo" onClick={openTodoModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="#fff"
        >
          <path
            d="M20 6.67C12.15 6.67 6.67 12.15 6.67 20s5.48 13.33 13.33 13.33S20 27.85 20 20 25.48 6.67 20 6.67zm0 20V13.33m0 13.34h0z"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </>
  );
}

export { TodoList };
