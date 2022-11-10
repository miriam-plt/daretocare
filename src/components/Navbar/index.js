import './index.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo192.png';

const Navbar = () => {
    return <div className='nav-bar'>
        <div className='nav-logo'>
            <Link className='logo-link' to='/'><img className='logo' src={Logo} alt='logo' /></Link>
        </div>
        <div className='nav-right'>
            <NavLink className='nav-link about-link' to='/about'>About</NavLink>
            <NavLink className='nav-link contact-link' to='/contact'>Contact</NavLink>
        </div>
    </div>
}

export default Navbar;