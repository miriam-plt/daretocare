import './index.scss';

function Partner(props) {
    const { partner } = props;

    return (
        <div>
            <h1 className='name'>{partner.name}</h1>
        </div>
    );
};

export default Partner;