import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;

  // creating a variable counter and then using increasing it will increase the counter value but it will not be propagated to UI.
  // We need to use hooks here to connect a variable with the UI.

  let [counter, setCounter] = useState(5)
  // useState gives two things, a variable and a set function that is used to change the variable.
  const addValue = () =>{
    counter+=1
    setCounter(counter)
  }

  const subValue = () => {
    counter = counter - 1
    setCounter(counter)
  }


  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>
        Add 1</button>
        <br />
      <button onClick={subValue}>
        Subtract 1</button>
    </>
  )
}

export default App
