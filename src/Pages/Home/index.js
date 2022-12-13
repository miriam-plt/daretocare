import './index.scss';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import image from '../../images/3d.png';

const Home = () => {
    return (
    <div className='homepage'>
        <Navbar />
        <div className='header'>
            <h1 className='title title-right'>Dare</h1>
            <img className='image-between' src={image} alt='between' />
            <h1 className='title title-left'>to Care</h1>
        </div>
        <div className='section-1'>
        <h5 className='subtitle'>Awareness and mental health care for the art community.</h5>
        <NavLink to={'/about'}><button className='button-homepage'>Read our manifesto →</button></NavLink>
        </div>
    </div>
)}

export default Home;