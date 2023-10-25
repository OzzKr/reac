import React from "react";

import "../css/TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <>
      <h1>
        Haz completado {completed} de {total}
      </h1>
      <h2>subtitulo</h2>
    </>
  );
}

export { TodoCounter };
