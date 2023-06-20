import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect, sem dependencias

  useEffect(() => {
    console.log("Estou sendo executado");
  }, []);

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - item no array de deps.
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber muda!");
    }
  }, [anotherNumber]);

  // 3 - cleanup do useEffect

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   console.log("Hello World!");
    //   setAnotherNumber(anotherNumber + 1);
    // }, 2000);
    // return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect:</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>+1</button>
      <p>Another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar another number
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
