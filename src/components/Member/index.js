import './index.scss';

function Member(props) {
    const { member } = props;

    return (
        <div>
            <h1 className='member-name'>{member.name}</h1>
        </div>
    );
};

export default Member;