import React, { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Julio");

  return (
    <>
      <h2>Isso será exibido?</h2>
      {x && <p>Se x for verdadeiro, sim!</p>}
      {!x && <p>Por agora o x é falso!</p>}
      <h1>If ternário!</h1>
      {name === "Julio" ? (
        <div>
          <p>O nome é : {name}</p>
        </div>
      ) : (
        <div>
          <p>
            O nome não foi encontrado. Pois a condicional está como: "name ===
            "Julio"
          </p>
        </div>
      )}
      <button onClick={() => setName("O nome é John Doe.")}>
        Alterar nome para John Doe
      </button>
    </>
  );
};

export default ConditionalRender;
