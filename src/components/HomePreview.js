import { useState } from 'react';
import { useNavigate } from 'react-router';

import styles from '../css/HomePreview.module.css';
import ServiceCardStyles from '../css/ServiceCard.module.css';

import ServicesJson from '../json/Services.json';
import CompanyJSON from '../json/CompanyInfo.json';

import scrollToTop from '../helpers/scrollToTop';

export default function HomePreview() {
    const navigate = useNavigate();

    const [services] = useState(ServicesJson.services);

    if (!services || services.length === 0) {
        return <p>No services available at the moment.</p>;
    }

    return (
        <>
            <div className='container'>
                <h1 className='col-12 header no-margin-top'>{CompanyJSON.name}</h1>
                <div className={`${ServiceCardStyles["content"]}`}>
                    <p style={{textAlign: "center"}}>
                        Embark on your journey into game development with our expert tutors as your guide! Together, we will focus together to complete your unique quests with tailored learning and practice. Begin crafting your first playable project within your first few weeks at a pace tailored to your adventure.
                    </p>
                    <button
                        className={`extra-wide center`}
                        onClick={() => {navigate(`/book`); scrollToTop()}}
                        style={{ marginTop: '2rem' }}
                    >
                        Click here to begin your journey!
                    </button>
                </div>
            </div>
        </>
    );
}