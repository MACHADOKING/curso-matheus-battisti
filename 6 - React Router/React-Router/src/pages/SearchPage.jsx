import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados disponíveis:</h1>
      <ul className="products">
        {items &&
          items.map((i) => (
            <li key={i.id}>
              <h2>{i.name}</h2>
              <p>R$: {i.price}</p>
              <Link to={`/products/${i.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchPage;
