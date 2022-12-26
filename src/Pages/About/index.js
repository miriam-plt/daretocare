import './index.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../src/assets/data/40587-scroll.json';
import Navbar from '../../components/Navbar';
import Team from '../../components/Team';
import Partners from '../../components/Partners';

const About = () => {


    return (
    <div className='about-page'>
        <Navbar />
    
        <div className='manifesto-container'>
            <div>
                <h6 className='category-title manifesto-title'>Our manifesto</h6>
            </div>

            <div className='manifesto'>
                <p>We are a group of emerging artists from a wide range of different disciplines within the creative industry working across 
                Europe. We have been dealing with mental health issues caused by various aspects of our working environment and 
                professional experience. We decided to work together as <i>Dare to Care</i> to reflect on our situation, 
                to share art which relates to mental health and to suggest structural improvements.</p>
                <p>In our group, we have experiences of manipulation, body shaming, eating disorders, anxiety, emotional 
                labour, exploitation, financial precarity, humiliation, harassment, toxic competition, low self esteem and other issues 
                and we have only been working for a few years. As individual art workers, we are often vulnerable and do not easily receive 
                emotional support in our working environment. This is something we would like to change in our own careers and prevent 
                from happening in careers of emerging and independent art workers no matter their age. </p>
                <p>In our experience, mental health and art practice are intrinsically entangled: art can alleviate a poor mental health state, 
                but it can also trigger negative emotions. Since art provides opportunities for social gathering and open communication, 
                enabling to build stronger and more cohesive communities, we believe that artists themselves need such opportunities. While 
                through our work we contribute to the cultural well-being of others, we must also look at the well-being of cultural workers. </p>
                <p>We believe that a conversation about mental health in the art world is long overdue, especially in relation to the 
                working conditions of emerging and independent artists, and we invite you to join the conversation. Our name, <i>Dare to Care</i>, 
                suggests that it is brave, useful and ultimately good to care about our surroundings and people, which we aim to do through 
                our collective practice.</p>
                <p>This is a long-term project and in its first year will be completed as a part of  
                <a href="https://destructura.com/" target="_blank" rel="noreferrer"> De Structura </a> 
                programme with their support. </p>
            </div>
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 350, height: 350 }}
                speed={0.5}
                className='scroll-down'
            />
        </div>

        <div className='team-container'>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <h6 className='category-title'>Meet the team</h6>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                <Team />
            </AnimationOnScroll>
        </div>
        
        <div className='partners-container'>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <h6 className='category-title'>Our Collaborators</h6>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                <Partners />
            </AnimationOnScroll>
        </div>

    </div>
)}

export default About;