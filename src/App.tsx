import './App.css'

import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Create from './pages/Create'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post/:id" element={<PostDetail />}></Route>
      </Routes>
    </div>
  )
}

export default App
