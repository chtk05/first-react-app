import { useState } from 'react'
import classes from './Greeting.module.css'
import { useAuth } from '../providers/AuthProvider'

const Greeting = () => {
  const { username } = useAuth()
  // const { name, msg } = props
  const [greetingMsg, setGreeting] = useState<string>('Hello Joo')
  const handleC = () => {
    setGreeting('Welcome Joo')
  }

  return (
    <>
      <div className={classes.card}>
        <h4>{greetingMsg}</h4>

        <p>{username}</p>
      </div>
      <button onClick={handleC}>Change text here...</button>
    </>
  )
}

export default Greeting
