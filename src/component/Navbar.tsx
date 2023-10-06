import { Link } from 'react-router-dom'
import navs from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <div className={navs.navcard}>
      <h4 className={navs.title}> NAVBAR</h4>

      <div className={navs.menu}>
        {isLoggedIn ? (
          <>
            <NavLink className={({ isActive }) => (isActive ? navs.active : navs.inactive)} to="/">
              Feed
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? navs.active : navs.inactive)} to="/profile">
              Profile
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? navs.active : navs.inactive)} to="/create">
              Create
            </NavLink>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
