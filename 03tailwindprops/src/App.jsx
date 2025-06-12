import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name : 'dia',
    age: 20,
  }
  let myarr = [1,2]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl'>learning tailwind</h1>
      <div className='p-4'>
        <img src="https://images.pexels.com/photos/11581120/pexels-photo-11581120.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="happy bday"/>
      </div>
      <Card name="dia" someObj={myObj} somearr={myarr}/>
      <Card/>

    </>
  )
}

export default App
