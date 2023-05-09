import './index.scss';
import FBlogo from '../../images/socialmedia-fb.png';
import IGlogo from '../../images/socialmedia-ig.png';


const Footer = () => {
    return <div className='footer-container'>
        <div className='footer'>
        
            <div className='follow'>
                <p>FOLLOW US</p>
            </div>

            <div className='social-media'>
                <a href="https://m.facebook.com/profile.php?id=100090244742686" target="_blank" rel="noreferrer"><img className='social-logo' alt='facebook' src={FBlogo} /></a>
                <a href="https://www.instagram.com/dare_to_care_art/" target="_blank" rel="noreferrer"><img className='social-logo' alt='instagram' src={IGlogo} /></a>
            </div>
        </div>
    </div>
}

export default Footer;