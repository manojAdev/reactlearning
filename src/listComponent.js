import React from 'react';
const MyList=(props)=>{

    const parentArr=props.data;
    console.log(props.data);
    

    //const newArrlist=parentArr.map((val) =><li>{val}</li>);

    const newArrlist=parentArr.map( (val,key)=>{
        return <li key={key}>{val}</li>
    });


    
   // console.log(newArrlist);

    return <ul>{newArrlist}</ul>;


}

export default MyList;