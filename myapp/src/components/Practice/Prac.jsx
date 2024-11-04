import React, { useEffect, useState } from 'react'

function Prac() {
    const[counter ,setcounter] = useState(1)

    function Increment(){
        setcounter(counter + 1)
    }
    function Decrement(){
        if(counter > 0 ){
            setcounter(counter - 1)  

        }else{
            setcounter(0)
        }
        
    }
    function Reset(){
        setcounter(0)
    }
    useEffect(()=>{console.log("render")})
  return (
    <div>
      <h1> counter : {counter}</h1>
      <button onClick={Increment}>+ </button><br/>
      {/* <button onClick={Decrement} disabled = {counter === 0  }>- </button><br/> */}
      <button onClick={Decrement} >- </button><br/>
      <button onClick={Reset}>reset</button>
    </div>
  )
}

export default Prac
