import { useState } from 'react'
import classes from './Greeting.module.css'

interface IGreetYou {
  name: string
  isLoggedIn: boolean
}

const Greeting = ({ name, isLoggedIn }: IGreetYou) => {
  // const { name, msg } = props
  const [greetingMsg, setGreeting] = useState<string>('Hello Joo')
  const handleC = () => {
    setGreeting('Welcome Joo')
  }

  return (
    <>
      <div className={classes.card}>
        <h4>{greetingMsg}</h4>

        <p>{isLoggedIn ? name : 'UNKNOWN'}</p>
      </div>
      <button onClick={handleC}>Change text here...</button>
    </>
  )
}

export default Greeting
