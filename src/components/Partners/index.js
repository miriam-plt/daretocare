import './index.scss';
import Partner from '../Partner';
import PartnersData from '../../assets/data/partners-data.json';


function Partners() {

    return (
        <div className='partner-container'>
            {PartnersData.map(partner => {
                return (
                    <div className='partner-card' key={partner._id}>
                        <div className='partner-info'>
                        <Partner key={partner._id} className='partner-name' partner={partner} />
                        </div>
                        <a href={partner.link} target="_blank" rel="noreferrer"><img className='partner-logo' src={partner.logo} alt='partner' /> </a>                                                      
                    </div>
                )
            })}
        </div>
    )
}

export default Partners;