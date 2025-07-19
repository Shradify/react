import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
        <div className='list-none'>
        {todos.map(todo => (
            <li key = {todo.id} className="flex justify-between items-center bg-pink-400 px-4 py-2 mb-2 rounded">
                <div className='text-white'>{todo.text}</div>
                <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </li>
        ))}
        </div>
        </>
    )
}

export default Todos
