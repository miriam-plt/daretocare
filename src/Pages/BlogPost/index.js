import './index.scss';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import PostData from '../../assets/data/blog-data.json';

function BlogPost() {
    const { id } = useParams();

    const selectedPost = PostData.filter(post => 
        post._id === id 
    )

   return <div>
        <Navbar />

        <div className='blog-post'>
        {selectedPost.map(post => {
            return (
                    <div className='blog-post-container' key={post._id}>
                        
                            <div className='blog-heading-container'>
                                <h1 className='category-title blog-title'>{post.title}</h1>
                            </div>

                        <div className='blog-post-section1'>
                            <div>
                                <img className='blog-post-image' src={post.image} alt='main' />
                                {post.credits && <p className='blog-post-image-credits'>Credits: {post.credits}</p>}
                            </div>

                            <div className='blog-post-intro-text'>
                                <h4 className='blog-post-link'>{post.linktext} <a href={post.link} target="_blank" rel="noreferrer">Read it here</a> </h4>
                                <h3 className='post-intro'>{post.intro}</h3>
                            </div>
                        </div>

                        <div className='blog-post-section2'>
                            {post.interview.map((interview, index) => (
                                <div key={index}>
                                    <h2 className='interview-question'>{interview.question}</h2>
                                    <div className='blog-post-answer'>
                                        <h2 className='interview-person'>{interview.person}</h2>
                                        <p className='interview-answer'>{interview.answer}</p>
                                    </div>
                                    <div className='blog-post-answer'>
                                        <h2 className='interview-person'>{interview.person2}</h2>
                                        <p className='interview-answer'>{interview.answer2}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                
                    </div>
            )
        })}
        </div>
       
    </div>
};

export default BlogPost;