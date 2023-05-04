import './index.scss';
import News from '../News';
import NewsData from '../../assets/data/news-data.json';
import { Link } from 'react-router-dom';


function AllNews() {

    return (
        <div className='news-container'>
            {NewsData.map(news => {
                return (
                        <div>
                            <div className='news-card' key={news._id}>
                                <div>
                                    <img className='news-image' src={news.images[0]} alt='news' />
                                </div>
                                <div className='news-info'>
                                    <p className='news-date'>{news.date}</p>
                                    <News key={news._id} className='news-name' news={news} />
                                    <p className='news-description'>{news.description}</p>
                                    <Link  className='news-link' to={`/news/${news._id}`}>
                                        <button className='news-button'>More info</button>
                                    </Link> 
                                </div>                                                       
                            </div>
                        </div>

                )
            })}
        </div>
    )
}

export default AllNews;