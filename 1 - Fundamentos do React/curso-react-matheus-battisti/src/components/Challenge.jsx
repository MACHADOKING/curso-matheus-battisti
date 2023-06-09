import { useState } from "react";

const Challenge = () => {
  let a = 4;

  let b = 8;

  const [somar, setSomar] = useState("");

  return (
    <>
      <p>
        <span>O número de "a" é: {a}</span>
      </p>
      <p>
        <span>O número de "b" é: {b}</span>
      </p>
      <p>
        <span>{`A soma dos dois valores é: ${somar}`}</span>
      </p>
      <button onClick={() => setSomar(a + b)}>Somar Valores</button>
    </>
  );
};

export default Challenge;
