import { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const History = () => {
  let [text, setText] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  const db = getDatabase();

  let handleSubmit = () => {
    set(push(ref(db, "history/")), {
      task: text,
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
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>submit</button>

      <ul>
        {taskArr.map((item) => (
          <li> {item.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
