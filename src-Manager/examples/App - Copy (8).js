import { useState, useEffect } from "react";

//sum of values using form eventhandler

const App = () => {
  const [sum, setSum] = useState(0);
  const [num,setNum]= useState(0);

  const valHandler = (e) => {
    let inV = parseInt(e.target.value);
    // let inV=Number(e.target.value);
    setNum(inV);
  };
  const formSubmit = (e) => {
    setSum(sum+num);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Enter Value</label>
        <input type="text" onChange={valHandler} />

        <p>Sum is {sum}</p>
        <input type="submit" name="submit"  value="add" />
      </form>
    </div>
  );
};

export default App;
