import React, { useState, useEffect } from "react";

function App() {
  const [hello, setHello] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080")
      .then(response => response.json())
      .then(data => setHello(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {hello && <h1>{hello.message}</h1>}
      {users &&
        users.map((user, index) => <p key={index}>{JSON.stringify(user)}</p>)}
    </div>
  );
}

export default App;
