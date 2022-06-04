import React, { useState } from "react";
import MyList from "./listComponent";
const App = () => {
  const [myM, setMYm] = useState("");

  const [managerListS, setmanagerListS] = useState([]);

  const inputManager = (e) => {
    let inV = e.target.value;
    setMYm(inV);
  };

  const formSubmit = (e) => {
    //merging old and new values into managerListS array
    setmanagerListS([...managerListS, myM]);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Enter Manager Name</label>:{" "}
        <input type="text" onChange={inputManager} />
        <input type="submit" value="Add Manager" />
      </form>
      <MyList data={managerListS} />
    </div>
  );
};

export default App;
