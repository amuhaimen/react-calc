import React, { useState, useEffect, useRef } from "react";

function App() {
  const [commonState, setCommonState] = useState("");

  // useRef state
  const [sumState, setSumState] = useState("");
  const previousSumRef = useRef(0);

  //Minus state
  const [minusStare, setMinusState] = useState("");
  const previousMinusRef = useRef(0);

  //Maltiply state
  const [maltiplyState, setMaltiplyState] = useState("");

  //Maltiply state
  const [divisionState, setDivisionState] = useState("");

  //sum
  const handleAdd = (e) => {
    setSumState(e.target.value);
  };

  //minus

  let handleMinus = (e) => {
    setMinusState(e.target.value);
  };
  //maltiply

  let handleMaltiply = (e) => {
    setMaltiplyState(e.target.value);
  };

  //division
  let handleDivision = (e) => {
    setDivisionState(e.target.value);
  };

  // let handleClear = () => {
  //   setSumState("");
  //   setMinusState("");
  // };

  let handleAddClick = () => {
    if (minusStare === "" && maltiplyState === "" && divisionState === "") {
      setCommonState(parseInt(previousSumRef.current) + parseInt(sumState));
      previousSumRef.current = sumState;
      // setSumState("");
    } else if (
      sumState === "" &&
      maltiplyState === "" &&
      divisionState === ""
    ) {
      setCommonState(parseInt(commonState) - parseInt(minusStare));
      previousMinusRef.current = minusStare;
      // setMinusState("");
    } else if (sumState === "" && minusStare === "" && divisionState === "") {
      setCommonState(parseInt(commonState) * parseInt(maltiplyState));
      // setMaltiplyState("");
    } else if (sumState === "" && minusStare === "" && maltiplyState === "") {
      setCommonState(parseInt(commonState) / parseInt(divisionState));
      // previousDivisionRef.current = divisionState;
      // setMaltiplyState("");
    }
  };

  return (
    <div>
      <input placeholder="Sum" type="text" onChange={handleAdd} />
      <input placeholder="Minus" type="text" onChange={handleMinus} />
      <input placeholder="Maltiply" type="text" onChange={handleMaltiply} />
      <input placeholder="Division" type="text" onChange={handleDivision} />

      <button onClick={handleAddClick}>Submit</button>
      {/* <button onClick={handleClear}>Clear</button> */}
      <h2>Sum: {commonState}</h2>
      <h2>Minus: {commonState}</h2>
      <h2>Maltiply: {commonState}</h2>
      <h2>Division: {commonState}</h2>
      <h1>Main value: {commonState} </h1>
    </div>
  );
}

export default App;
