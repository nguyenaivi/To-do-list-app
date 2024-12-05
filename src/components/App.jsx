import React, {useState} from "react";

function App() {
  const [text,setText] = useState("");
  const [list, setList] = useState([]);
  function HandleText(event) {
    setText(event.target.value);
  }

  function HandleList() {
    setList (function (prevList) {
      return (
        [
          ...prevList,
          text
        ]
      );
    })
    setText ("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange = {HandleText} type="text" value = {text}/>
        <button onClick = {HandleList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map(item => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
