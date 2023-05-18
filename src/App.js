import React, { useState, useEffect, useRef } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const App = () => {

  let [text, setText] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  const db = getDatabase();


  const [commonState, setCommonState] = useState(0);

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
    setText(e.target.value)
  };

  //minus

  let handleMinus = (e) => {
    setMinusState(e.target.value);
    setText(e.target.value)
  };
  //maltiply

  let handleMaltiply = (e) => {
    setMaltiplyState(e.target.value);
    setText(e.target.value)
  };

  //division
  let handleDivision = (e) => {
    setDivisionState(e.target.value);
    setText(e.target.value)
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

    set(push(ref(db, "history/")), {
      cal: text,
    }).then(() => {
      console.log("data sent");
    });

  };


  useEffect(() => {
    const historyRef = ref(db, "history/");
    onValue(historyRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });
      });
      console.log(arr);
      setTaskArr(arr);
    });
  }, []);

  return (
    <>
      <section className="flex">
        <div className="left bg-[#36ADBD] w-[60%]  px-[39px] relative">
          <div className="up flex">
            <div className=" w-[30%] pt-[80px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
              Addition
              </h3>
              <input
                placeholder="Enter a number"
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
            <div className=" w-[30%] text-right pt-[80px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
              Division
              </h3>
              <input
                placeholder="Enter a number"
                type="text"
                onChange={handleDivision}
                className="w-full py-[13px] pl-[20px] mt-[21px]"
              />
            </div>
          </div>
          <div className="flex justify-center pt-[229px] pb-[229px]">
            <h2 className="font-inter font-bold text-[96px] text-white">{commonState}</h2>
            </div>
          <div className="down flex">
            <div className=" w-[30%] pb-[72px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
              Substraction
              </h3>
              <input
                placeholder="Enter a number"
                type="text"
                onChange={handleMinus}
                className="w-full py-[13px] pl-[20px] mt-[21px]"
              />
            </div>
            <div className=" w-[39%] "></div>
            <div className=" w-[30%] pb-[72px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
                Multiplication
              </h3>
              <input
                placeholder="Enter a number"
                type="text"
                onChange={handleMaltiply}
                className="w-full py-[13px] pl-[20px]  mt-[21px]"
              />
            </div>
          </div>
        </div>
        <div className="right bg-[#36ADBD] w-[40%]  text-center">
          <h2 className="text-white font-inter font-bold text-[96px] pt-[63px]">
            History
          </h2>
          <ol>
          {taskArr.map((item, index) => (
          <li key={index}> {sumState} added by {item.cal} and total is {commonState}</li>
        ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default App;
