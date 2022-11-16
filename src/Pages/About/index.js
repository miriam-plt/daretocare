import './index.scss';
import Navbar from '../../components/Navbar';
import Team from '../../components/Team';
import Partners from '../../components/Partners';

const About = () => {
    return (
    <div className='about-page'>
        <Navbar />
        <div className='about-container'>
            <h6>Our manifesto</h6>
            <p>We are a group of emerging artists from a wide range of different disciplines within the creative industry working across 
            Europe. We have experience with mental health struggles caused by various aspects of our working environment and our 
            professional experience. We decided to work together as Dare to Care - Art Collective to reflect on our experience, 
            to share art which relates to mental health and to suggest structural improvements.</p>
            <p>In our group, we have experiences of manipulation, body shaming, eating disorders, anxiety, exploitative emotional 
            labour, exploitation, financial precarity, humiliation, harassment, toxic competition, low self esteem and other issues 
            and we have only been working for a few years. As individual artists, we are often vulnerable and do not easily receive 
            emotional support in our working environment. This is something we would like to change in our own careers and prevent 
            this from happening in careers of emerging and / or independent creative workers no matter their age. </p>
            <p>In our experience, mental health and artistic practice are intrinsically entangled - art can alleviate a bad mental 
            health state but it can also trigger negative emotions. While art provides opportunities for social gathering and 
            open-minded communication which then build stronger and more cohesive communities, artists themselves need such space too. 
            While through our work we contribute to the cultural wellbeing of communities, we also must look at the wellbeing of 
            cultural workers. </p>
            <p>We believe that a conversation about mental health in the art world is long overdue, especially in relation to the 
            working conditions of emerging and independent artists, and we invite you to join the conversation. Our name, Dare to Care, 
            suggests that it is brave, useful and ultimately good to care about one's surroundings and people which we aim to do through 
            our collective practice.</p>
            <p>This is a long-term project and in its first year will be completed as a part of De Structura programme with their support. </p>
        </div>

        <div className='team-container'>
            <h6>Meet the team</h6>
            <Team />
        </div>
        
        <div className='partners-container'>
            <h6>Our Partners</h6>
            <Partners />
        </div>

    </div>
)}

export default About;