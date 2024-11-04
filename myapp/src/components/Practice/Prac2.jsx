import React, { useEffect, useState } from 'react'

function Prac2() {
    const[counter ,setcounter] = useState(1)
    const[counter2 , setcounter2] = useState(2)

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
    function Increment2(){{
        setcounter2(counter2+ 1)
    }}
    useEffect(()=>{
        console.log("render") 
    }, [counter , counter2])
  return (
    <div>
      <h1> counter : {counter}</h1>
      <button onClick={Increment}>+ </button><br/>
      {/* <button onClick={Decrement} disabled = {counter === 0  }>- </button><br/> */}
      <button onClick={Decrement} >- </button><br/>
      <button onClick={Reset}>reset</button>
      <h1>counter2 :{counter2}</h1>
      <button onClick={Increment2}>+ </button>
    </div>
  )

}

export default Prac2
