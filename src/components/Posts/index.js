import './index.scss';
import Post from '../Post';
import BlogData from '../../assets/data/blog-data.json';
import { Link } from 'react-router-dom';


function Posts() {

    return (
        <div className='posts-container'>
            {BlogData.map(post => {
                return (
                        <Link className='post-link' to={`/blog/${post._id}`}>
                            <div className='post-card' key={post._id} style={{backgroundImage: `url(${post.image})`}}>
                                <div className='post-info'>
                                    <Post key={post._id} className='post-name' post={post} />
                                    <p className='post-description'>{post.description}</p>
                                </div>                                                       
                            </div>
                        </Link>

                )
            })}
        </div>
    )
}

export default Posts;