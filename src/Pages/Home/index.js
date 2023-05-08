import './index.scss';
import Navbar from '../../components/Navbar';
import AllNews from '../../components/AllNews';
import image from '../../images/corals.png';
import '../../assets/fonts/CraftworkGrotesk-Regular.ttf';

const Home = () => {
    return (
    <div className='homepage'>
        <Navbar />
            <div className='header'>
                <div className='header-content'>
                    <h1 className='title title-top'>dare</h1> 
                    <img className='image-between' src={image} alt='between' />
                    <h1 className='title title-bottom'>to care</h1>
                    <h5 className='subtitle'>─ Art collective working on mental health</h5>
                </div>
            </div>

            <div className='section1-news'>
                <AllNews />
            </div> 

    </div>
)}

export default Home;