import './index.scss';

function Testimonial(props) {
    const { testimonial } = props;


    return (
        <div className='testimonial'>
            <div>
                <p className='quote'>{testimonial.quote}</p>
                <p className='testimonial-name'>{testimonial.name}</p>
            </div>

        </div>
    );
};

export default Testimonial;