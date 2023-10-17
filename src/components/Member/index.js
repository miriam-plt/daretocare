import './index.scss';

function Member(props) {
    const { member } = props;

    return (
        <div>
            <h1 className='member-name'><a href={member.website} target="_blank" rel="noreferrer" className='a-link'> {member.name} </a></h1>
        </div>
    );
};

export default Member;