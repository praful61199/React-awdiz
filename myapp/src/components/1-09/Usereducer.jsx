// import React, { useReducer } from 'react'

// function Reducer(state,action) {
//     console.log(state,action)

//     switch(action.type){
//         case "Increment" :
//         return {...state , counter : state.counter + 1}
//         case "Decrement":
//             return {...state , counter : state.counter + 1}
//         case "Reset":
//             return {...state , counter : state.counter + 1}  
//             default :
//             return state  
//     }
    

// }

// const Initialstate = {counter : 100}

// const UseReducer = ()=>{
//     const[state,dispatch] = UseReducer(Reducer,Initialstate)

//     function Increment(){
//         dispatch({type : "Increment"})
//     }
//     function Decrement() {
//         dispatch({type : "Decrement"})
//     }
//     function Reset (){
//         dispatch ({type :"Reset"})
//     }
     
//     return (
//         <div>
//             <h1> counter : {state.counter}</h1>
//             <button onclick = {Increment}>Increment</button>
//             <button>Increment</button>
//             <button>Increment</button>
//         </div>
//     )

// }

// export default UseReducer 






import React, { useReducer } from "react";

function Reducer(state, action) {
  console.log(state, action, "state, action");
  // action = {type : "DECRREMENT"}
  // state = { counter: 100 }
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 100 };
    default:
      return state;
  }
}

const InitialState = { counter: 100, user: null };

const UseReducer = () => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  function Increment() {
    dispatch({ type: "INCREMENT" });
  }
  function Decrement() {
    dispatch({ type: "DECREMENT" });
  }
  function Reset() {
    dispatch({ type: "RESET" });
  }
  return (
    <div>
      <h1>Counter : {state.counter} </h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default UseReducer;