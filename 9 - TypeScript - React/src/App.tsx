import "./App.css";

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

function App() {
  // 1 - Variaveis

  const name: string = "Julio";
  const age: number = 23;
  const isWorking: boolean = true;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
    </div>
  );
}

export default App;
