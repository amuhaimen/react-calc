import React from 'react'
import Practice from "./components/Practice"

const App = () => {
  return (
    <Practice/>
  )
}

export default App



// import { useState } from "react";

// function App() {
//   let [num, setNum] = useState("");
//   let [add, setAdd] = useState(0);
//   let [sub, setSub] = useState(0);
//   let [multiply, setMultiply] = useState(0);
//   let [divide, setDivide] = useState(0);


//   let handleAdd = (e) => {
//     setNum(e.target.value);

//   };
//   let handleSub = (e) => {
//     setSub(e.target.value);
    
//   };
//   let handleMul = (e) => {
//     setMultiply(e.target.value);
//   };
//   let handleDiv = (e) => {
//     setDivide(e.target.value);
//   };

//   let addition = (a,b) => {
//     return a + b
//   }
//   let substitution = (a,b) => {
//     return a - b
//   }
//   let multiplyFunc = (a,b) => {
//     return a * b
//   }
//   let Divide = (a,b) => {
//     return a / b
//   }

//   let handleClick = () => {

//     if(! num == ""){
//       setAdd(num);
//     }

//     if(num == ""){
//       setSub(num);
//       console.log(num)
//     }
    
//   };

 
  

//   return (
//     <>
//       <div className="one">
//         <h1>React Calculator</h1>

//         <h3>Addition</h3>
//         <input onChange={handleAdd} />
//         <h3>Substitution</h3>
//         <input onChange={handleSub}/>
//         <h3>Multiply</h3>
//         <input onChange={handleMul}/>
//         <h3>Divide</h3>
//         <input onChange={handleDiv}/><br/>
      
//         <button onClick={handleClick}>Click</button>

//         <h2>{0}</h2>
//         <h2>{0}</h2>
//       </div>
//     </>
//   );
// }

// export default App;
