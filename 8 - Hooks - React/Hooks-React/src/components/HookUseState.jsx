import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "João";
  const [name, setName] = useState("Júlio");

  const changeNames = () => {
    userName = "João Silva";

    setName("Júlio Machado");

    console.log(userName);
  };
  console.log(name);

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nome</button>
      <hr />
    </div>
  );
};

export default HookUseState;
