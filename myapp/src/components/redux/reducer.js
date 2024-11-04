// import { Decrement, Increment, Reset } from './actions'
import{INCREMENT,DECREMENT,RESET} from './actionTypes'


const Initialstate = {counter : 1}

const counterReduccer =(state = Initialstate,action) =>{

    switch(action.type){
        case INCREMENT :
            return { ...state , counter : state.counter + 1}
         case DECREMENT:
                return {...state , counter : state.counter - 1}
         case RESET :
            return {...state , counter : 1 }   
         default :   
         return state ;
    }

};
export default counterReduccer