import React from "react";

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <h2>Função como prop:</h2>
      <button onClick={myFunction}>Clique aqui para executar a função.</button>
      <p>O resultado irá aparecer no console.log</p>
    </div>
  );
};

export default ExecuteFunction;
