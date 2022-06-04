import React,{useState,useEffect} from 'react';
import MyList from './listComponent';

const App=()=>{

  const arr=['manoj',"chhavi","Tintin","tamtam"];

  return ( <MyList data={arr} />)

}

export default App;