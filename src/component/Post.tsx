import { PostDTO } from '../types/dto'
import classes from './Post.module.css'
import { Link } from 'react-router-dom'

interface IPostProps {
  post: PostDTO
}
const Post = ({ post }: IPostProps) => {
  return (
    <div className={classes.post}>
      <Link to={`/post/${post.id}`} style={{ color: 'black', textDecoration: 'none' }}>
        <p>ID:{post.id}</p>
        <p>UserID: {post.userId}</p>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
      </Link>
    </div>
  )
}

export default Post
