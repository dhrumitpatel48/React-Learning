import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5
  const addValue = () => {
    // counter = counter + 1
    // console.log(counter)

    // This code will not increase counter value by 4, it will only increase by 1
    // This is react behaviour. If you want to update value 4 times refer below code.
    // setCounter(counter => counter + 1);
    // setCounter(counter => counter + 1);
    // setCounter(counter => counter + 1);
    // setCounter(counter => counter + 1);


    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    console.log(counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Dhrumit</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  );
}

export default App;
