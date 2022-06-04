import React, { useState } from "react";
import MyList from "./listComponent";

const Form = (props) => {
  //const data=['manoj','chhavi','monty'];
  return (
    <div>
      <form onSubmit={props.data1}>
        <label>Enter Manager Name</label>
        <input type="text" onChange={props.data2} />
        <input type="submit" value="add manager" />
      </form>
      <MyList data={props.listdata} />
    </div>
  );
};

export default Form;
