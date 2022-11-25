import './index.scss';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
    <div className='homepage'>
        <Navbar />
        <div className='header'>
            <h1 className='title'>Dare to Care</h1>
            <h5>Awareness and mental health care for the art community.</h5>
            <NavLink to={'/about'}><button>Read our manifesto</button></NavLink>
        </div>
        
    </div>
)}

export default Home;