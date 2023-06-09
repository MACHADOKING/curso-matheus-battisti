import React, { useState } from "react";
import "./App.css";
import JulioProfile from "./assets/julio_profile.jpg";
import ListRenderization from "./components/ListRenderization";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import CarDetails from "./components/CarDetails";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function showMessage() {
  console.log("Evento do componente Pai.");
}

function App() {
  const cars = [
    { id: 1, brand: "Chevrolet", name: "Onix", newCar: true },
    { id: 2, brand: "Ford", name: "Fusion", newCar: true },
    { id: 3, brand: "Toyota", name: "Yaris", newCar: true },
    { id: 4, brand: "Volkswagen", name: "Gol", newCar: false },
    { id: 5, brand: "Fiat", name: "Palio", newCar: false },
  ];

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    { id: 1, nome: "Júlio", idade: 23, profissão: "Developer" },
    { id: 2, nome: "Fulano", idade: 17, profissão: "Eletricista" },
    { id: 3, nome: "John Doe", idade: 25, profissão: "Ferramenteiro" },
    { id: 4, nome: "Matheus", idade: 28, profissão: "Developer" },
  ];

  return (
    <>
      <h1>Avançando em React</h1>
      <img src="/Janetwork-Logo-Principal.jpg" alt="Janetwork Logo" />
      <img src={JulioProfile} alt="Janetwork Logo" />
      <ListRenderization />
      <ConditionalRender />
      <Container myValue="Uma prop para teste">
        <div>
          <h3>
            Esse conteudo está no arquivo App.jsx, ao invés de dentro do
            componente.
          </h3>
        </div>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      {/*A propriedade key, não precisa usar no componente*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          name={car.name}
          newCar={car.newCar}
        />
      ))}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      <h2>Desafio 4:</h2>
      {pessoas.map((person) => (
        <UserDetails
          key={person.id}
          name={person.nome}
          age={person.idade}
          occupation={person.profissão}
        />
      ))}
    </>
  );
}

export default App;
