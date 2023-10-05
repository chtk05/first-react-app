import { useState } from 'react'
import { PostDTO } from '../types/dto'
import classes from './Post.module.css'

interface IPostProps {
  post: PostDTO
}
const Post = ({ post }: IPostProps) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const showText = () => {
    setIsShow(!isShow)
  }
  return (
    <div className={classes.post}>
      <p>ID:{post.id}</p>
      <p>UserID: {post.userId}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      {isShow && <p>more information...</p>}
      <button onClick={showText}>{isShow ? 'Show Less' : 'Show More'}</button>
    </div>
  )
}

export default Post
