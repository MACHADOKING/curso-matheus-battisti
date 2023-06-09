import React from "react";

const Message = ({ msg }) => {
  return (
    <>
      <h2>State lift:</h2>
      <div>A mensagem é: {msg}</div>
    </>
  );
};

export default Message;
