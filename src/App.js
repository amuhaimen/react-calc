import { useState } from "react";

function App() {
  let [num, setNum] = useState("");
  let [add, setAdd] = useState(0);
  let [sub, setSub] = useState(0);
  let [multiply, setMultiply] = useState(0);
  let [divide, setDivide] = useState(0);

  let handleAdd = (e) => {
    setNum(e.target.value);
  };

  let handleClick = () => {
    setAdd(num);
  };

  return (
    <>
      <div className="one">
        <h1>React Calculator</h1>
        <input onChange={handleAdd} />
        <h3>Addition</h3>
        <input />
        <h3>Substitution</h3>
        <input />
        <h3>Multiply</h3>
        <input />
        <h3>Divide</h3>
        <button onClick={handleClick}>Click</button>

        <h2>{add}</h2>
      </div>
    </>
  );
}

export default App;
