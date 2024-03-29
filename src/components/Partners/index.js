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
                        <a className='partner-link' href={partner.link} target="_blank" rel="noreferrer" > {partner.name} </a>                                                      
                    </div>
                )
            })}
        </div>
    )
}

export default Partners;