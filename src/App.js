// One Parent component, one child and one super child component calling and form component
import React, { useState } from "react";
import Form from "./FormComponent";
const App = () => {
  const [myInput, setInput] = useState("");
  const [myList, setmyList] = useState([]);

  const formSubmitHandler = (e) => {
    let updatedArray = [...new Set([...myList, myInput])];
    setmyList(updatedArray);
    e.preventDefault();
  };

  const inputHandler = (e) => {
    let inV = e.target.value;
    setInput(inV);
  };

  return (
    <div>
      <Form data1={formSubmitHandler} data2={inputHandler} listdata={myList} />
    </div>
  );
};

export default App;
