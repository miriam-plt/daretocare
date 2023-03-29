import './index.scss';
import { useState } from 'react';
import Testimonial from '../Testimonial';
import TestimonialsData from '../../assets/data/testimonials-data.json';
import arrowLeft from '../../images/arrow_circle_left.png';
import arrowRight from '../../images/arrow_circle_right.png';

const Testimonials = () => {
    const [count, setCount] = useState(1);
    const selectedId = count;

    const handleClick1 = e => {
        setCount(Math.max(count - 1, 1));
    };

    const handleClick2 = e => {
        setCount(Math.min(count + 1, 2));
    }

    return (
        <div className='testimonial-container'>
            {TestimonialsData.filter(testimonial => testimonial._id === selectedId).map(testimonial => {
                return (
                    <div className='testimonial-card' key={testimonial._id}>
                        <div className='testimonial-info'>
                        <Testimonial key={testimonial._id} className='testimonial-name' testimonial={testimonial} />
                        </div>                                                     
                    </div>
                )
            })}

            <img className='arrow' src={arrowLeft} alt='arrow-left' onClick={handleClick1}/>
            <img className='arrow' src={arrowRight} alt='arrow-right' onClick={handleClick2} />
            
            
        </div>
    )
}

export default Testimonials;