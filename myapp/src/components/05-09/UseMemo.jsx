
import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState(["My first task"]);
  const AddTodo = () => {
    setTodos([...todos, "New task "]);
  };

  //   const CalcuatedValueFromHeavyCalculations = HeavyCalculations(counter);
  const CalcuatedValueFromHeavyCalculations = useMemo(() => {
    HeavyCalculations(counter);
  }, [counter]);
  return (
    <div>
      <h1>Heavy calculated Counter : {CalcuatedValueFromHeavyCalculations}</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
      <button onClick={AddTodo}>New Task</button>
    </div>
  );
};

function HeavyCalculations(counter) {
  console.log("calculations started.");
  var newValue = 0;
  for (let i = 1; i < 1000000000; i++) {
    counter += i;
  }
  return counter;
}

export default UseMemo;
