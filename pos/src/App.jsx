import { useState } from "react";
import Child from "./Child";
import Cashier from "./Cashier";
import Manager from "./Manager";

function App() {
  const [nema, setNema] = useState("");
  const [name, setName] = useState("");
  const [acctype, setAcctype] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    setNema(name);
  }
  const takeData = (value) => {
    setAcctype(value);
  };
  return (
    <>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inp_name">Enter Username</label>
        <input
          type="text"
          id="inp_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{nema}</p>
      <p>{acctype}</p>
      <Child callback={takeData} />
      {acctype === null ? (
        ""
      ) : acctype === "cashier" ? (
        <Cashier />
      ) : acctype === "manager" ? (
        <Manager />
      ) : (
        "No account is goods"
      )}
    </>
  );
}
export default App;
