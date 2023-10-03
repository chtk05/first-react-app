import classes from './Greeting.module.css'

interface IGreetYou {
  name: string
  msg: string
  isLoggedIn: boolean
}

const Greeting = ({ name, msg, isLoggedIn }: IGreetYou) => {
  // const { name, msg } = props
  return (
    <div className={classes.card}>
      <h4>WELCOME!</h4>
      <p>{isLoggedIn ? name : 'UNKNOWN'}</p>
      <h5>{msg}</h5>
    </div>
  )
}

export default Greeting
