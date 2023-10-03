import { PostDTO } from '../types/dto'
import classes from './Post.module.css'

interface IPostProps {
  post: PostDTO
}
const Post = ({ post }: IPostProps) => {
  const handleClick = (id: number) => {
    alert(`clicked ${id}`)
  }
  return (
    <div onClick={() => handleClick(post.id)} className={classes.post}>
      <p>ID:{post.id}</p>
      <p>UserID: {post.userId}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  )
}

export default Post
