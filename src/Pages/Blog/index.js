import './index.scss';
import Navbar from '../../components/Navbar';
import Posts from '../../components/Posts';
import Footer from '../../components/Footer';

const Blog = () => {
    return (
    <div className='blog-page'>
        <Navbar />


        <div className='blog-heading-container'>
            <div className='the-blog'>
                <h1 className='category-title blog-title'>The blog</h1>
                <h5 className='blog-description'>Writings from our team</h5>
            </div>
        </div>
    
    <Posts />

    <div>
        <Footer />
    </div>

    </div>
)}

export default Blog;