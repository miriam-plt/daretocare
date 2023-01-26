import './index.scss';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar';


const Home = () => {
    return (
    <div className='homepage'>
        <Navbar />
        <div className='background-main'>
            <div className='header'>
                <h1 className='title title-top'>Dare</h1>  
                <h1 className='title title-bottom'>to Care</h1>
                <div className='section-1'>
                    <h5 className='subtitle'>Art collective</h5>
                    <NavLink to={'/about'}><button className='button-homepage'>Read our manifesto →</button></NavLink>
                </div>
            </div>
        </div>
    </div>
)}

export default Home;