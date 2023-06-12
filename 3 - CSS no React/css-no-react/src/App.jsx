import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 9;
  const [name] = useState("Julio");
  const redTitle = true;

  return (
    <>
      {/* CSS global */}
      <h1>Hello World!</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p
        style={{
          color: "blue",
          padding: "25px",
          borderTop: "2px solid purple",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/* Inline style dinâmico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2
        style={
          name === "Julio"
            ? { color: "chartreuse", backgroundColor: "black" }
            : { color: "pink", backgroundColor: "grey" }
        }
      >
        CSS Dinâmico
      </h2>
      {/* Classes dinâmicas no CSS */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title />
    </>
  );
}

export default App;
