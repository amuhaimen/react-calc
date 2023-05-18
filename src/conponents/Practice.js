import React, { useState, useEffect, useRef } from "react";

function App() {
  // useRef state
  const [sumState, setSumState] = useState("");
  const previousSumRef = useRef(0);

  //sum state
  const [add, setAdd] = useState("");

  //Minus state
  const [minus, setMinus] = useState("");
  const [minusStare, setMinusState] = useState("");
  const previousMinusRef = useRef(0);

  //Maltiply state
  const [maltiplay, setMaltiply] = useState("");
  const [maltiplyState, setMaltiplyState] = useState("");
  const previousMaltiplyRef = useRef(0);

  //Maltiply
  // const [maltiplyStare, setMaltiplyState] = useState('');
  // const previousMinusRef = useRef(0);

  //sum
  const handleAdd = (e) => {
    setSumState(e.target.value);
  };

  let handleAddClick = () => {
    if (minusStare === "") {
      setAdd(parseInt(previousSumRef.current) + parseInt(sumState));
      // console.log(parseInt(previousSumRef.current) + parseInt(sumState));
      previousSumRef.current = sumState;
      console.log("pascche");

      // setSumState("");
    } else if (sumState === "") {
      setMinus(parseInt(previousSumRef.current) - parseInt(minusStare));
      console.log(
        "ami int:",
        parseInt(previousSumRef.current) - parseInt(minusStare)
      );
      previousMinusRef.current = minusStare;
      // setMinusState("");
      console.log("pacche too");
    }

    if (true) {
      console.log(maltiplyState, previousSumRef.current);
      setMaltiply(parseInt(previousSumRef.current) * parseInt(maltiplyState));
      console.log(parseInt(previousSumRef.current) * parseInt(maltiplyState));
      previousMaltiplyRef.current = maltiplyState;
      console.log("pacche three");

      // setMaltiplyState("");
    }
  };

  //minus

  let handleMinus = (e) => {
    setMinusState(e.target.value);
  };
  //maltiply

  let handleMaltiply = (e) => {
    setMaltiplyState(e.target.value);
  };

  // let handleClear = () => {
  //   setSumState("");
  //   setMinusState("");
  // };

  return (
    <div>
      <input placeholder="Sum" type="text" onChange={handleAdd} />
      <input placeholder="Minus" type="text" onChange={handleMinus} />
      <input placeholder="Maltiply" type="text" onChange={handleMaltiply} />

      <button onClick={handleAddClick}>Submit</button>
      {/* <button onClick={handleClear}>Clear</button> */}
      <h2>{add}</h2>
      <h3>{minus}</h3>
      <h3>{maltiplay}</h3>
    </div>
  );
}

export default App;
