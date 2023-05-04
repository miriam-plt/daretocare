import './index.scss';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import NewsData from '../../assets/data/news-data.json';

function NewsInfo() {
    const { id } = useParams();

    const selectedNews = NewsData.filter(news => 
        news._id === id 
    )

   return <div>
        <div className='nav-backround'>
            <Navbar />
        </div>


        <div>
        {selectedNews.map(news => {
            return (
                    <div className='news-info-container' key={news._id}>
                        
                            <div className='news-heading-container'>
                                <h1 className='news-title'>{news.title}</h1>

                                <h5 className='news-info-description'>{news.description}</h5>
                                    {news.details.map((detail) => (
                                        <p className='news-details'>{detail}</p>
                                    ))}

                                    {news.links.map((link, index) => (
                                        <div key={index}>
                                            <p className='news-details'>{link.linktext} <a className='news-link' href={link.link} target="_blank" rel="noreferrer">here.</a></p>
                                        </div>
                                    ))}
                            </div>

                            <div>
                                <img className='news-image2' src={news.images[1]} alt='news' />
                            </div>
                
                    </div>
            )
        })}
        </div>
       
    </div>
};

export default NewsInfo;