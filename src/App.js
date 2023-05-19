import React, { useState, useEffect, useRef } from "react";
import { getDatabase, ref, set, push, onValue, update } from "firebase/database";

const App = () => {

  let [text, setText] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  let [editId, setEditId] = useState("");
  let [edit, setEdit] = useState(false);
  const db = getDatabase();

  let [test, setTest] = useState(false)

  const [commonState, setCommonState] = useState(0);

  // useRef state
  const [sumState, setSumState] = useState("");
  const previousSumRef = useRef(0);

  //Minus state
  const [minusStare, setMinusState] = useState("");
  const previousMinusRef = useRef(0);

  //Maltiply state
  const [maltiplyState, setMaltiplyState] = useState("");
  const previousMaltiplyRef = useRef(0);
  
  //Maltiply state
  const [divisionState, setDivisionState] = useState("");
  const previousDivisionRef = useRef(0);

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
      setCommonState(parseInt(commonState) + parseInt(sumState));
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
      previousMaltiplyRef.current = maltiplyState;
      // setMaltiplyState("");
    } else if (sumState === "" && minusStare === "" && maltiplyState === "") {
      setCommonState(parseInt(commonState) / parseInt(divisionState));
      previousDivisionRef.current = divisionState;
      // setMaltiplyState("");
    }


    setTest(test = true)
    console.log(test = true);



    set(push(ref(db, "history/")), {
      cal: text,
    }).then(() => {
      console.log("data sent");
    });

  };


  let handleEdit = (item) => {
    console.log(item.cal, item.id);
    setEdit(true);
    setText(item.cal);
    setEditId(item.id);
  };

  let handleUpdate = () => {
    console.log(editId);
    update(ref(db, "history/" + editId), {
      cal: text,
    }).then(() => {
      setEdit(false);
      console.log(text);
      setText("");
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
        <div className="right bg-[#36ADBD] w-[40%]  ">
          <h2 className="text-white font-inter font-bold text-[96px] pt-[63px] text-center">
            History
          </h2>
          <ol className="text-4xl text-white ">
            {/* <input className="text-black" value={text}  /> */}
          {taskArr.map((item, index) => (
          <li key={index} className="mt-2 "> {index+1}. added by {item.cal} and total is {commonState}
           <button className="bg-black px-4 py-2 rounded-lg" onClick={() => handleEdit(item)}>Edit</button>
           <button className="bg-green-400 mx-5 px-4 py-2 rounded-lg" onClick={handleUpdate}>Update</button>

           </li>
        ))}
{/*         
        {test && 
        <>
          <li>0 added by {previousSumRef.current} and total is {commonState}</li>
        <li>{commonState} added by {previousMinusRef.current} and total is {commonState}</li>
        <li>{commonState} added by {previousMaltiplyRef.current} and total is {commonState}</li>
        <li>{commonState} added by {previousDivisionRef.current} and total is {commonState}</li>
        </>
} */}
          </ol>
        </div>
      </section>
    </>
  );
};

export default App;
