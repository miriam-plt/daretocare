import './index.scss';

function Post(props) {
    const { post } = props;

    return (
        <div>
            <h1 className='post-title'>{post.title}</h1>
        </div>
    );
};

export default Post;