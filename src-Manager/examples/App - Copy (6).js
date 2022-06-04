import { useState, useEffect } from "react";

//On/Off App
function App() {

const[val,setVal]=useState("ON");

const toggle=()=>{

  setVal( (val=="ON")?"OFF":"ON");
}

  return (<div><button onClick={toggle}>{val}</button></div>)
}



export default App;