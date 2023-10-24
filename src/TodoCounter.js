import React from "react";

function TodoCounter({ completed, total }) {
  return (
    <React.Fragment>
      <h1>
        Haz completado {completed} de {total}
      </h1>
      <h2>subtitulo</h2>
    </React.Fragment>
  );
}

export { TodoCounter };
