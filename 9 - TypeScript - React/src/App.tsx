import "./App.css";

function App() {
  // 1 - Variaveis

  const name: string = "Julio";
  const age: number = 23;
  const isWorking: boolean = true;

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
    </div>
  );
}

export default App;
