import navs from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={navs.navcard}>
      <h4 className={navs.title}> NAVBAR</h4>
      <button type="submit" className={navs.btn1}>
        Login
      </button>
    </div>
  )
}

export default Navbar
