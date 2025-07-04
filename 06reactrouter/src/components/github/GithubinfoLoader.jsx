import React from 'react'

const GithubinfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return response.json() //ye promise return hua h
}

export default GithubinfoLoader
