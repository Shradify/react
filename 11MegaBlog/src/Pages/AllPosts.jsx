//comeback to check container class

import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.listPost([]).then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
    return (
        <div className='py-8 w-full'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => {
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard post = {post} />
                        </div>
                    })}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
