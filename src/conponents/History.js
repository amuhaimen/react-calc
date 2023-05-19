import { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  update,
} from "firebase/database";

const History = () => {
  let [text, setText] = useState("");
  let [taskArr, setTaskArr] = useState([]);
  let [editId, setEditId] = useState("");
  let [edit, setEdit] = useState(false);
  const db = getDatabase();

  let handleSubmit = () => {
    set(push(ref(db, "history/")), {
      calc: text,
    }).then(() => {
      console.log("data sent");
    });
  };
  let handleEdit = (item) => {
    console.log(item.calc, item.id);
    setEdit(true);
    setText(item.calc);
    setEditId(item.id);
  };

  let handleUpdate = () => {
    console.log(editId);
    update(ref(db, "history/" + editId), {
      calc: text,
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
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {edit ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleSubmit}>submit</button>
      )}
      <ul>
        {taskArr.map((item) => (
          <li>
            {" "}
            {item.calc}
            <button onClick={() => handleEdit(item)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;