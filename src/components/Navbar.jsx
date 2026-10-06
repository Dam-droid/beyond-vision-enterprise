import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';


function Navbar(){
    return(
        <header className='navbar'>
            <div className='container nav-container'>
                <Link to='/' className='logo'>
                    <img src={logo} alt="Beyond Vision Enterprise Logo"  className='w-8 h-8 object-contain'/>
                    <span className='logo-text'>Beyond Vision <small>Enterprise</small></span>
                </Link>

                <nav className='nav-links'>
                    <NavLink to='/' end>Home</NavLink>
                    <NavLink to='/about' >About</NavLink>
                    <NavLink to='/services' >Services</NavLink>
                    <NavLink to='/contact' className='nav-contact'>Contact Us</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;