import './index.scss';
import arrowRight from '../../images/arrow_circle_right.png';

function Testimonial(props) {
    const { testimonial } = props;


    return (
        <div className='testimonial'>
            <div>
                <p className='quote'>{testimonial.quote}</p>
                <p className='testimonial-name'>{testimonial.name}</p>
            </div>
            <div>
                <img className='arrow' src={arrowRight} alt='arrow' />
            </div>
        </div>
    );
};

export default Testimonial;