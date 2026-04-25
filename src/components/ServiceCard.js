import { useNavigate } from 'react-router';

import ServiceCardStyles from '../css/ServiceCard.module.css';

import scrollToTop from '../helpers/scrollToTop';

export default function ServiceCard({ service, cbackgroundColor, clickable = true, externalLink = false }) {
    const navigate = useNavigate();

    return (
        <div key={service.id}
            className={`hover-lift ${ServiceCardStyles["service-card"]}`}
            onClick={() => {
                if (!clickable) return;

                console.log(externalLink);

                if (externalLink) {
                    window.open(service.link, "_blank", "noopener,noreferrer");
                } else {
                    navigate(`/services/${service.id}`);
                }
                
                scrollToTop();
            }}
            title={`Learn more about ${service.name}`}
            style={{
                cursor: (clickable ? 'pointer' : 'default'),
                backgroundColor: cbackgroundColor
            }}
        >
            <h3>{service.name}</h3>
            <p>{service["short-description"]}</p>
            <button style={{cursor: (clickable? 'pointer': 'default')}} onClick={scrollToTop}>{clickable ? "Learn More" : "Coming Soon"}</button>
        </div>
    );
}