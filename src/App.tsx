import './App.css'
import Greeting from './component/Greeting'
import Navbar from './component/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting name="PARN" msg="Hello" />
    </div>
  )
}

export default App
