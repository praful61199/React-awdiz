import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Decrement, Increment, Reset } from '../redux/actions'

const Reduxcounter = () => {
  const counter = useSelector((state)=> state.counter.counter)
  const dispatch = useDispatch()

  const Incrementcounter = () =>{
    dispatch(Increment());
  }
  const Decrementcounter = () =>{
    dispatch(Decrement());
  }
  const Resetcounter = () =>{
    dispatch(Reset());
  }

  
  return (
    <div>
      <h1>redux counter</h1>
      <h2> counter : {counter}</h2>
      <button onClick={Incrementcounter}>+ </button>
      <button onClick={Decrementcounter}>- </button> 
      <button onClick={Resetcounter}>reset </button>
    </div>
  )
}

export default Reduxcounter
