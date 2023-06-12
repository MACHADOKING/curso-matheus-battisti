import React from "react";
import "./MyComponent.css";

const MyComponent = () => {
  return (
    <>
      <h1>Css de Componente</h1>
      <p>Este é o parágrafo do componente.</p>
      <p className="my-comp-paragraph">
        Este tb é do componente, porem esta com className para não vazar para o
        css global.
      </p>
    </>
  );
};

export default MyComponent;
