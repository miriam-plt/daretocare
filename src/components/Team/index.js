import './index.scss';
import Member from '../Member';
import TeamData from '../../assets/data/team-data.json';


function Team() {

    return (
        <div>
            {TeamData.map(member => {
                return (
                    <div className='member-card'>
                        <Member key={member._id} className='member-name' member={member} />
                        {/* <img className='menu__item-img' src={work.image} alt='work' /> */} 
                        <h5>{member.role}</h5>
                        <p>{member.bio}</p>                                                       
                    </div>
                )
            })}
        </div>
    )
}

export default Team;