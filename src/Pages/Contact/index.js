import './index.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../src/assets/data/97963-contact.json';
import Navbar from '../../components/Navbar';

const Contact = () => {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
          .then((result) => {
                console.log(result.text);
              setStatusMessage('Message succesfully sent!');
              e.target.reset();

          }, (error) => {
                console.log(error.text);
              setStatusMessage('Failed to send the message. Please try again.');
          });

      };


    return <div>
        <Navbar />
        <div className='container'>
        <div className='contact-form'>
            <h5 className='contact-me contact-text'>Get in touch</h5>
            <p className='contact-text'>If you have any inquiries about our work or would like to collaborate with us, please reach out to daretocare.artcollective@gmail.com or fill in the contact form below.</p> <p className='contact-text'> We work on a part-time basis and will be in touch with you as soon as we can.</p>
            <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type='email' name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input type='text' name='subject' placeholder='Subject' required />
                    </li>
                    <li>
                        <textarea type='text' name='message' placeholder='Message' required />
                    </li>
                    <li>
                        <input type='submit' className='button' value='SEND' />
                    </li>
                    <p className='status-message'>{statusMessage}</p>
                </ul>
            </form>
        </div>
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 350, height: 350 }}
                speed={0.5}
                className='contact-animation'
            />
        </div>
    </div>
}

export default Contact;