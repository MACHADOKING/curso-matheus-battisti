import { React, useState } from "react";

const ListRenderization = () => {
  const [List] = useState(["Renato", "Suelen", "Julio"]);

  const [Users, setUsers] = useState([
    { id: 1, name: "Renato", age: 41 },
    { id: 2, name: "Suelen", age: 40 },
    { id: 3, name: "Júlio", age: 23 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <>
      <ul>
        {List.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {Users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random User</button>
    </>
  );
};

export default ListRenderization;
