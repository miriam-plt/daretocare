import './index.scss';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
    <div className='homepage'>
        <Navbar />
        <div className='header'>
            <h1 className='title'>Dare to Care</h1>
            <h3 className='subtitle'>Art Collective</h3>
            <h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</h5>
            <NavLink to={'/about'}><button>Read our manifesto</button></NavLink>
        </div>
        
    </div>
)}

export default Home;