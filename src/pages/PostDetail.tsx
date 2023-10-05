import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'

const PostDetail = () => {
  const { id } = useParams()
  const { posts, isLoading } = usePost(id || '1')

  if (isLoading) return <h1>Loading...</h1>
  return (
    <div>
      <h1>PostDetails id: {id}</h1>
      {posts && (
        <>
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
        </>
      )}
    </div>
  )
}

export default PostDetail
