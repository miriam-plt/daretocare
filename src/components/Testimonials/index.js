import './index.scss';
import Testimonial from '../Testimonial';
import TestimonialsData from '../../assets/data/testimonials-data.json';


function Testimonials() {

    return (
        <div className='testimonial-container'>
            {TestimonialsData.map(testimonial => {
                return (
                    <div className='testimonial-card' key={testimonial._id}>
                        <div className='testimonial-info'>
                        <Testimonial key={testimonial._id} className='testimonial-name' testimonial={testimonial} />
                        </div>                                                     
                    </div>
                )
            })}
        </div>
    )
}

export default Testimonials;