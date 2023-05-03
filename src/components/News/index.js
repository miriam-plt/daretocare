import './index.scss';

function News(props) {
    const { news } = props;

    return (
        <div>
            <h1 className='news-title'>{news.title}</h1>
        </div>
    );
};

export default News;