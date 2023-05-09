import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo-color6.png';

const Navbar = () => {
    return <div className='nav-container'>
        <div className='nav-bar'>
            <div className='nav-logo'>
                <Link className='logo-link' to='/'><img className='logo' src={Logo} alt='logo' /></Link>
            </div>
            <ul className='nav-links'>
                <li><NavLink className={({ isActive }) => isActive ? 'nav-link selected' : 'nav-link'} to='/about'>About</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'nav-link selected' : 'nav-link'} to='/blog'>Blog</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'nav-link selected' : 'nav-link'} to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    </div>
}

export default Navbar;