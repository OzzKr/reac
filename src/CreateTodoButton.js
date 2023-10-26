import "./CreateTodoButton.css";

let count = 0;
function saludar(message) {
  console.log("salutaciones", message, count);
  count++;
  salutacion(count);
}

const salutacion = (counter) => {
  alert("salutacion" + counter);
};


function CreateTodoButton() {
  return (
    <>
      <button
        className="CreateTodoButton"
        onClick={(event) => {
          saludar("message");

        }}
      >
        +
      </button>
    </>
  );
}

export { CreateTodoButton };
