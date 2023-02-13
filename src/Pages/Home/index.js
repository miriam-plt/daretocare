import './index.scss';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import image from '../../images/corals.png';

const Home = () => {
    return (
    <div className='homepage'>
        <Navbar />
            <div className='header'>
                <div className='header-content'>
                    <h1 className='title title-top'>dare</h1> 
                    <img className='image-between' src={image} alt='between' />
                    <h1 className='title title-bottom'>to care</h1>
                    <div className='section-1-phone'>
                    <h5 className='subtitle2'>Art collective</h5>
                    <NavLink to={'/about'}><button className='button-homepage2'>Read our manifesto →</button></NavLink>
                    </div>
                </div>
            </div>
                <div className='section-1'>
                    <h5 className='subtitle'>Art collective</h5>
                    <NavLink to={'/about'}><button className='button-homepage'>Read our manifesto →</button></NavLink>
                </div>  
    </div>
)}

export default Home;