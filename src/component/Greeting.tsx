import classes from './Greeting.module.css'

interface IGreetYou {
  name: string
  msg: string
}

const Greeting = ({ name, msg }: IGreetYou) => {
  // const { name, msg } = props
  return (
    <div className={classes.card}>
      <h4>WELCOME!</h4>
      <p>{name}</p>
      <h5>{msg}</h5>
    </div>
  )
}

export default Greeting
