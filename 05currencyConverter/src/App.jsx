import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/inputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-orange-500 w-200 '>currency app</h1>
      <div className='bg-gray'>
      <InputBox label = "To"/>
      </div>
    </>
  )
}

export default App
