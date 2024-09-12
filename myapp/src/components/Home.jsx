import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function Home (){

    const{state,dispatch}= useContext(AuthContext)
    console.log(state, "state")

    function Increment(){
        dispatch({type : "Increment"})
    }



    return <div> 
       <h1> Home , counter :{state?.counter}</h1>
       <button onClick={Increment}>+  </button>
        </div>
}
export default Home;