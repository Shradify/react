import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-pink-200 min-h-screen'>
      <h1 className='text-center bg-pink-400 w-fit mx-auto text-5xl'>Todo with Redux</h1>
      <AddTodo />
      <Todos />
    </div>
    </>
  )
}

export default App
