import React from "react";

const Container = ({ children, myValue }) => {
  return (
    <>
      <h2>Prop Children:</h2>
      {children}
      {myValue}
    </>
  );
};

export default Container;
