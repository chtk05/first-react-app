import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'
import classes from './Login.module.css'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [num, setNumclick] = useState(0)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login(username, password)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  const setNum = () => {
    setNumclick(num + 5)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.loginForm}>
        <label> Username </label>
        <input
          type="text"
          className={classes.items}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className={classes.items}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className={classes.loginBtn} value="Login" />
      </form>
      <p>Day : {num}</p>
      <button onClick={setNum}>ADD DAY</button>
    </>
  )
}

export default Login
