
import { Link } from 'react-router-dom'
import './NavbarStyles.css'

 const Navbar = (activeEl) => {
  return (
    <div className='navbar'>
        <ul>
            <li className={activeEl.activeEl === 1 ? 'manu active' : 'manu'}>
                <Link to="/">Home</Link>
            </li>
            <li className={activeEl.activeEl === 2 ? 'manu active' : 'manu'}>
                <Link to="/about">About</Link>
            </li>
            <li className={activeEl.activeEl === 3 ? 'manu active' : 'manu'}>
                <Link to="/resume">Resume</Link>
            </li>
            <li className={activeEl.activeEl === 4 ? 'manu active' : 'manu'}>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>

    </div>
  )
}
export default Navbar
