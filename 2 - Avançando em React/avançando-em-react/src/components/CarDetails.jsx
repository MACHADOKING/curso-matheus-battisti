import React from "react";

const CarDetails = ({ id, brand, name, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul key={id}>
        <li>Marca: {brand}</li>
        <li>Nome: {name}</li>
        <li>newCar: {newCar}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
