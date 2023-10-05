import './App.css'
import Greeting from './component/Greeting'
import Navbar from './component/Navbar'
import Post from './component/Post'
import usePosts from './hooks/usePosts'
// import { FormEvent, useState } from 'react'

// const posts: PostDTO[] = [
//   {
//     id: 1,
//     userId: 1,
//     title: "Let's learn React!",
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   },
//   {
//     id: 2,
//     userId: 2,
//     title: 'How to install Node.js',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   },
//   {
//     id: 3,
//     userId: 3,
//     title: 'Basic HTML',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   },
// ]

function App() {
  // useEffect(() => {
  //   const fetchData = () => {
  //     console.log('data fetched')
  //     alert('Hello')
  //   }
  //   fetchData()
  // }, [])
  const { posts } = usePosts()
  return (
    <div className="App">
      <Navbar />
      <Greeting name="PARN" isLoggedIn={true} />
      <div className="feed-container">
        {posts &&
          posts.map((postval) => {
            return <Post key={postval.id} post={postval} />
          })}
      </div>
    </div>
  )
}

export default App
