import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  // 3 - carregamento de dados
  const url = "http://localhost:3000/products";
  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((i) => (
            <li key={i.id}>
              <h2>{i.name}</h2>
              <p>R$: {i.price}</p>
              {/* 4 - rota dinâmica */}
              <Link to={`/products/${i.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
