import React, { useState } from 'react'

// ternary opeartor

const Prac3 = () => {

    const[data,setdata] = useState(true)
    const[student,setstudent] = useState(["virat", "sky" , "abd"])
  return (
    <div>
      {/* <h1> {data ? <p>welcome user</p> : <p> please sign in</p>}</h1> */}

      {/* {data && <h2> welcome to mobile section</h2>}    */}  


      {student.map((studentname , i )=>(
        <h1 key ={i}>{studentname}</h1>

      ))}
    </div>
  )
}

export default Prac3
