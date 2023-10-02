import './App.css'
import Greeting from './component/Greeting'
import Navbar from './component/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting name="PARN" msg="Hello" isLoggedIn={true} />
    </div>
  )
}

export default App
