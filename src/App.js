import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);
  const [print, printData] = useState(false);
  function updateInput(val) {
    console.log(val.target.value);
    setData(val.target.value);
    printData(false);
  }

  return (
    <div className="App">
      <h1>Get Input value (without using form)</h1>
      <p>Prints value from onChange</p>
      <h2 style={{ color: "green" }}>{data}</h2>
      <p>Print value from onClick</p>
      {print ? <h3 style={{ color: "darkred" }}>{data}</h3> : null}
      <input type="text" onChange={updateInput} />

      <button
        onClick={() => {
          printData(true);
        }}
      >
        Print data
      </button>
    </div>
  );
}
