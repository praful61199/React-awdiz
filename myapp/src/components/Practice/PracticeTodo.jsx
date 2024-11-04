import React, {useState } from "react";

const PracticeTodo = () => {
    const[todoss,settodos] = useState([])
    const[singletodo ,setsingletodo] = useState("")


    function Submittodo(){
        settodos([...todoss , singletodo]);
        setsingletodo("")
        

    }

    function handleinput(event){
        setsingletodo(event.target.value)

    }
  return (
    <div>
      <h1> All Todos</h1>
      {todoss.map((todo)=>(
        <h3>{todo}</h3>
      ))}
      <input value={singletodo} onChange={handleinput} type= "text" placeholder="type your todo"/>
      <button onClick={Submittodo}>submit</button>
    </div>
  )
}

export default PracticeTodo
