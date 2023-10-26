import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  let [state, setState] = React.useState(0);
  return (
    <>
      <p>diste click {state}</p>
      <button
        className="CreateTodoButton"
        onClick={() => {
          setState(state++);
        }}
      >
        +
      </button>
    </>
  );
}

export { CreateTodoButton };
