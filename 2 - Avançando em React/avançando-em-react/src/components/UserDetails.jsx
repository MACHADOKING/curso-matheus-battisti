import React from "react";

const UserDetails = ({ name, age, occupation }) => {
  return (
    <>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Nome: {occupation}</p>
      {age >= 18 ? (
        <p>Pode tirar habilitação!</p>
      ) : (
        <p>
          Ainda{" "}
          <b>
            <u>não</u>
          </b>{" "}
          pode tirar habilitação!
        </p>
      )}
      <hr></hr>
    </>
  );
};

export default UserDetails;
