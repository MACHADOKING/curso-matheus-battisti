// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  return (
    <>
      <h1>About</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor */}
      <ChangeCounter />
    </>
  );
};

export default About;
