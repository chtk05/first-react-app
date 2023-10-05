import Post from '../component/Post'
import usePosts from '../hooks/usePosts'
import classes from './Home.module.css'

const Home = () => {
  const { posts } = usePosts()
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
