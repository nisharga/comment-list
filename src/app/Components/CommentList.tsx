import React from 'react'
import Likes from './Likes'
import { Plus } from 'lucide-react'

const CommentList = () => {
  return (
    <div className=''>
      Like: <Likes totalLike={10} />
      <Plus color="red" size={48}/>
    </div>
  )
}

export default CommentList