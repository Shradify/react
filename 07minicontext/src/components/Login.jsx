import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!username || !pass) return null
        setUser({username, pass})
    }
    return (
        <div>
            <h2>login</h2>
            <input type="text" placeholder='username' value={username } onChange={(e) => setUsername(e.target.value)} />
            <input type="text" placeholder='password' value={pass} onChange={(e) => setPass(e.target.value)}/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login
