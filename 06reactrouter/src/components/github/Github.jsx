import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    const data = useLoaderData()

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then(res => res.json())
    //     .then(data => {setData(data)})
    // }, []) //lots of lag

    return (
        <div>
            <h1 className="text-center bg-gray-600">followers count : {data.followers}</h1>
            <img src="data.avatar_url" alt="github_pp" width={300}/>
        </div>
    )
}

export default Github
