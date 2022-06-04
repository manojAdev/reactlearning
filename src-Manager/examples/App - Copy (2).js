import "./App.css";
import React, { useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Current Count is: {count}</p>
      <button onClick={()=>setCount(count + 1)}>+</button>
      <button onClick={()=>setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
