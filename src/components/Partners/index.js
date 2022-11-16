import './index.scss';
import Partner from '../Partner';
import PartnersData from '../../assets/data/partners-data.json';


function Partners() {

    return (
        <div>
            {PartnersData.map(partner => {
                return (
                    <div className='member-card'>
                        <Partner key={partner._id} className='partner-name' partner={partner} />
                        {/* <img className='menu__item-img' src={work.image} alt='work' /> */}                                                       
                    </div>
                )
            })}
        </div>
    )
}

export default Partners;