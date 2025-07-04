import React from 'react'
import { useParams } from 'react-router-dom'

function Username() {
    const {userid} = useParams()
  return (
    <div>
      <h1 className='text-center bg-amber-200 text-pink-400'>current user is : {userid} </h1>
    </div>
  )
}

export default Username
