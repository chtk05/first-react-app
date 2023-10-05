import navs from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={navs.navcard}>
      <h4 className={navs.title}> NAVBAR</h4>

      <div className={navs.menu}>
        <NavLink className={({ isActive }) => (isActive ? navs.active : navs.inactive)} to="/">
          Feed
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? navs.active : navs.inactive)} to="/profile">
          Profile
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? navs.active : navs.inactive)} to="/create">
          Create
        </NavLink>
      </div>
      <button type="submit" className={navs.btn1}>
        Login
      </button>
    </div>
  )
}

export default Navbar
