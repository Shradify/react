import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let value = 19
  let [counter, setCount] = useState(value)
  //state and ui ka sync state change ho gyi so ui bhi at every place in dom.
  
  const addValue = () => {
      if(counter < 20){
        counter = counter + 1;
        setCount(counter)
        console.log("value added",Math.random())
      }
    }
    const removeValue = () => {
      if(counter > 0){
        setCount(counter - 1) //5
        console.log("value removed",counter)
      } //dono counter 6 h
    }

  return (
    <>
      <h1>this is counter {counter} site.</h1>
      <h2>counter value = {counter}</h2>

      <button onClick={addValue}>add</button>
      <br />
      <button onClick={removeValue}>remove</button>
    </>
  )
}
export default App
