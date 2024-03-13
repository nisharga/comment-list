import React from 'react'
import Likes from './Likes' 

const CommentList = () => {
  return (
    <div className='bg-white p-4'>
      Like: <Likes totalLike={10} /> 
    </div>
  )
}

export default CommentList