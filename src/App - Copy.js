import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'


function Hello(props)
{

  return <h2>{props.name}</h2>

}

function App(props) {

 var age=13;

 const [myname,setMyName]=useState({myclass:"MCA",section:"A"});

function changeHandler() {
  setMyName({
    myclass:"BCA",
    section:"B"
  });
}



  return (
    <div className="App">
     
     <p>My Class:{myname.myclass} and My Section:{myname.section}</p>
     
     
     
      my age is {age} {props.name}<br/>
     




      <Hello name="Manoj" />
      <Hello name="Chhavi" />

      <button onClick={()=>changeHandler()} >Change STate</button>
    </div>
  );
}

export default App;
