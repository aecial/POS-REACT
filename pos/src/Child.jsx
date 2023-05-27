import { useState } from "react";

const Child = ({ callback }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    username === "Teddy" && password === "pass1234" ? pass() : deny();
  }
  function pass() {
    callback(data);
  }
  function deny() {
    callback(another);
  }
  const data = "cashier";
  const another = "manager";
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" id="pass">
          Submit
        </button>
      </form>
    </>
  );
};

export default Child;
