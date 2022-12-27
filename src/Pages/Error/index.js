import './index.scss';
import Navbar from '../../components/Navbar';
import { NavLink } from 'react-router-dom';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../src/assets/data/76699-error.json';

const Error = () => {
    return (
    <div>
        <Navbar />
        <div className='error-page'>
            <div className='error-msg'>
                <h1>404</h1>
                <h2>Ooops!</h2>
                <h2>Page not found</h2>
                <h5>This page doesn't exist or was removed.<br/> We suggest you back to home.</h5>
                <NavLink to={'/'}><button className='button-error'>Back to Home</button></NavLink>
            </div>
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 350, height: 350 }}
                speed={0.5}
                className='error-animation'
            />
        </div>
    </div>
)}

export default Error;