import { useState, useEffect } from "react";

//eventhandler
function App() {
  const [km, setKm] = useState(0);

  const kmHandler = (e) => {
    let kmm = e.target.value;
    setKm(kmm);
  };

  return (
    <div>
      <label>Please Enter KM</label> <input type="text" onChange={kmHandler} />
      <p>Current KM {km}</p>
    </div>
  );
}

export default App;
