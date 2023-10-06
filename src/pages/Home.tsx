import Post from '../component/Post'
import usePosts from '../hooks/usePosts'
import { useAuth } from '../providers/AuthProvider'
import classes from './Home.module.css'

const Home = () => {
  const { posts } = usePosts()
  const { isLoggedIn } = useAuth()

  console.log('from home:', isLoggedIn)
  return (
    <div className={classes.feedContainer}>
      {posts &&
        posts.map((postval) => {
          return <Post key={postval.id} post={postval} />
        })}
    </div>
  )
}

export default Home
