import React from 'react'
import Likes from './Likes' 
import { SingleComment } from '.'
import { CommentListData } from '@/static/commentList'

const CommentList = () => {
  return (
    <div className=''>
      {
        (CommentListData ?? []).map( comment => <SingleComment key={comment.id} comment={comment} /> )
      } 
    </div>
  )
}

export default CommentList