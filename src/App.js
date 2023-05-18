import React, { useState, useEffect, useRef } from "react";

const App = () => {
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
    <>
      <section className="flex">
        <div className="left bg-[#36ADBD] w-[60%]  px-[39px]">
          <div className="up flex">
            <div className=" w-[30%] pt-[80px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
                ADD
              </h3>
              <input
                placeholder="Sum"
                type="text"
                onChange={handleAdd}
                className="w-full py-[13px] pl-[20px] mt-[21px]"
              />
            </div>
            <div className=" w-[37%] pt-[143px]">
              <a href="#">
                <div
                  onClick={handleAddClick}
                  className="mx-auto font-inter font-bold text-2xl py-[10px] px-[77px] w-[235px]  text-black bg-white"
                >
                  Button
                </div>
              </a>
            </div>
            <h2>0</h2>
            <div className=" w-[30%] text-right pt-[80px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
                Division
              </h3>
              <input
                placeholder="Division"
                type="text"
                onChange={handleDivision}
                className="w-full py-[13px] pl-[20px] mt-[21px]"
              />
            </div>
          </div>
          <div className="down flex">
            <div className=" w-[30%] pt-[500px] pb-[72px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
                Minus
              </h3>
              <input
                placeholder="Minus"
                type="text"
                onChange={handleMinus}
                className="w-full py-[13px] pl-[20px] mt-[21px]"
              />
            </div>
            <div className=" w-[39%] "></div>
            <div className=" w-[30%]  pt-[500px] pb-[72px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
                Multiplication
              </h3>
              <input
                placeholder="Maltiply"
                type="text"
                onChange={handleMaltiply}
                className="w-full py-[13px] pl-[20px] text-right mt-[21px]"
              />
            </div>
          </div>
        </div>
        <div className="right bg-[#36ADBD] w-[40%] h-[878px] text-center">
          <h2 className="text-white font-inter font-bold text-[96px] pt-[63px]">
            History list
          </h2>
          <ul>
            <li>{commonState}</li>
          </ul>
        </div>
      </section>
      <h1>Main value: {commonState} </h1>
    </>
  );
};

export default App;
