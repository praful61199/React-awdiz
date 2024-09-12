import { useContext } from "react";
import { DarkModeContext } from "./05-09/DarkModeContext"
function Login() {
  const { state, dispatch } = useContext(DarkModeContext);
  const ChangeTheme = () => {
    if (state.mode == "light") {
      dispatch({ type: "DARKMODE" });
    } else {
      dispatch({ type: "LIGHTMODE" });
    }
  };
  return (
    <>
      <p>Current colour  - {state.mode}</p>
      <h1
        style={{
          backgroundColor: state.mode == "light" ? "white" : "Red",
          color: state.mode == "light" ? "black" : "white",
        }}
      >
        Login
      </h1>
      <button onClick={ChangeTheme}>Change colour</button>
    </>
  );
}

export default Login;



// import {useState} from 'react'
// import '../styles/counter.css'



// function Counter(){

//     const[counter ,setcounter] = useState(0);     // syntax


//     function increment(){
//         setcounter(counter + 1)

//     }
    
//     function decrement(){
//         setcounter(counter - 1)
//     }
//     function reset (){
//         setcounter(0)
//     }





//     return <div> 
//         <h1>counter : {counter}</h1> 
//         <div className='parent'> 
//         <button onClick={increment}> + </button>
//         <button onclick={decrement}> - </button>
//         <button onclick={reset}>Reset</button>
//         </div>
//         </div>
// }
// export default Counter;