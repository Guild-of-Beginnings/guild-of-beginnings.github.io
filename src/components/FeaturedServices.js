import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import ServiceCardStyles from '../css/ServiceCard.module.css';

import scrollToTop from '../helpers/scrollToTop';

import ServicesJson from '../json/Services.json';

export default function FeaturedServices() {
    const navigate = useNavigate();

    const [services] = useState(ServicesJson.services);

    if (!services || services.length === 0) {
        return <p>No services available at the moment.</p>;
    }
    
    const getFeaturedServiceById = (id) => services.find(service => service.id === id && service['currently-offered'] === true && service['featured'] === true);

    return (
        <>
            <h1 className="col-12 header">Featured Services</h1>
            <div className={`${ServiceCardStyles["featured-services"]}`}>
                {services.map(({id}, i) => {
                    const service = getFeaturedServiceById(id);
                    if (!service) {
                        console.log(`primaryServices[${i}] (id: ${id}) is undefined`);
                        return null;
                    }
                    return (
                        <div key={i} className={`${ServiceCardStyles["featured-service"]}`}>
                            <Link to={`/services/${service.id}`} title={`Learn more about ${service.name}`}>
                                <h2>{service.name}</h2>
                            </Link>

                            <div>
                                <img className={`${ServiceCardStyles["featured-image"]}`} src={`${service.image ? `/images/${service.image}` : '/GameTutorLogo2.png'}`} alt={service['featured-alt-text'] ? service['featured-alt-text'] : `No alt text available for ${service.name}`}/>
                                <div className={`${ServiceCardStyles["content"]}`}>
                                    {service['featured-description'].map((text, i) => {
                                        return (<p key={i}>{text}</p>);
                                    })}
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    navigate(`/services/${service.id}`);
                                    scrollToTop();
                                }}
                                title={`Learn more about ${service.name}`}
                            >
                                Learn More
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}