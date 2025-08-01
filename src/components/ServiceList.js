import { useState } from 'react';

import ServiceCardStyles from '../css/ServiceCard.module.css';

import ServiceCard from './ServiceCard';

import ServicesJson from '../json/Services.json';

export default function ServiceList() {
    const [services] = useState(ServicesJson.services);
    const [primaryServices] = useState(ServicesJson["primary-services"]);
    const [servicesComingSoon] = useState(ServicesJson["services-coming-soon"]);

    if (!services || services.length === 0) {
        return <p>No services available at the moment.</p>;
    }

    const getServiceById = (id) => services.find(service => service.id === id && service['currently-offered']);
    const getCSServiceById = (id) => services.find(service => service.id === id && !service['currently-offered']);
    return (
        <>
            <h1 className="col-12 header">Guild Services</h1>
            <p>Within the halls of the Guild, many paths await. Here you'll find the services currently offered to aspiring adventurers, with more disciplines soon to be unveiled!</p>
            <div className={ServiceCardStyles["services"]}>
                {primaryServices.map((id, i) => {
                    const service = getServiceById(id);
                    if (!service) {
                        console.log(`primaryServices[${i}] (id: ${id}) is undefined`);
                        return null;
                    }
                    return (
                        <ServiceCard
                            key={i}
                            service={service}
                        />
                    );
                })}
            </div>
            <h1 className="col-12 header">More Services Coming Soon</h1>
            <p>As the Guild grows, so too will our offerings. Stay tuned for new services and disciplines to be unveiled in the coming months! Here are a few sneak peeks:</p>
            <div className={ServiceCardStyles["services"]}>
                {servicesComingSoon.map((id, i) => {
                    const service = getCSServiceById(id);
                    if (!service) {
                        console.log(`servicesComingSoon[${i}] (id: ${id}) is undefined2`);
                        return null;
                    }
                    return (
                        <ServiceCard
                            key={id}
                            service={service}
                            clickable={false}
                        />
                    );
                })}
            </div>
        </>
    );
}