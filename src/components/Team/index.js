import './index.scss';
import Member from '../Member';
import TeamData from '../../assets/data/team-data.json';


function Team() {

    return (
        <div className='team-container'>
            {TeamData.map(member => {
                return (
                    <div className='member-card' key={member._id}>
                        <img className='member-img' src={member.image} alt='member' /> 
                        <div className='member-info'>
                            <Member key={member._id} className='member-name' member={member} />
                            <h5 className='member-role'>{member.role[0]}{member.role[1] && `, ${member.role[1]}`}</h5>
                            <p className='member-bio'>{member.bio}</p>
                        </div>                                                       
                    </div>
                )
            })}
        </div>
    )
}

export default Team;