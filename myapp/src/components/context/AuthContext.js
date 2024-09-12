import { createContext, useReducer } from "react";


 export const AuthContext = createContext()


const Reducer = (state,action) =>{

    switch(action.type){
        case "Login":
        return {...state , user : action.payload}
        case "Logout":
            return {...state , user : null}
            case "Increment":
                return {...state , counter: state.counter + 1}
            default :
            return state; 

                

    }
};

const Initialstate = {user : null , counter : 100}


// now create high order component 

function ParentAuth ({children}){

    const[state,dispatch]= useReducer(Reducer,Initialstate)

    return (
        <AuthContext.Provider value = {{state,dispatch}} >
            {children}
            </AuthContext.Provider>
    )

}
export  default ParentAuth ;