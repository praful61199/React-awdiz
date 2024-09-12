import React, { useState } from 'react'
import AnotherComponent from './AnotherComponent'

const Memo = () => {
    const[counter ,setCounter] = useState(2)
    const[counter2 ,setcounter2] = useState(100)
    
  return (
    <div>
        <h1> memo counter = {counter}</h1>
        <button onClick={()=>setCounter(counter + 1)}> + </button>
        <button  onClick={ () => setcounter2(counter2 + 1)}> + </button>
      
      <AnotherComponent counter2= {counter2}/>
    </div>
    
  );
};

export default Memo
