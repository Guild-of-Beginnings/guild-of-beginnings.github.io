import { useState } from 'react';
import { useNavigate } from 'react-router';

import styles from '../css/Home.module.css';
import ServiceCardStyles from '../css/ServiceCard.module.css';

import ServicesJson from '../json/Services.json';
import CompanyJSON from '../json/CompanyInfo.json';


export default function AboutPreview() {
    const navigate = useNavigate();

    const [services] = useState(ServicesJson.services);

    if (!services || services.length === 0) {
        return <p>No services available at the moment.</p>;
    }

    return (
        <>
            <h1 className='col-12 header'><span className='logo'>{CompanyJSON.name}</span></h1>
            <div className={`${styles['about-preview']}`}>
                <div className={`container`}>
                        <div>
                            <img className={`${ServiceCardStyles["featured-image-right"]} ${ServiceCardStyles["img-width-20"]}`} src={'/GoBLogoColor.png'} alt="The official Guild of Beginnings logo featuring a blue controller with peach-colored buttons, an outline of a book behind the controller to the right, and an outline of a phone behind the controller to the left."/>
                            <div className={`${ServiceCardStyles["content"]}`}>
                                <p>
                                At {CompanyJSON.name}, we specialize in helping gamers and aspiring game developers grow their skills through one-on-one, personalized coaching. Whether you're learning the basics or refining advanced techniques, our expert tutors are here to guide you every step of the way.
                            </p>
                            <p>
                                With personalized coaching sessions, we focus on your unique goals and challenges, providing tailored advice and strategies to help you succeed. Our tutors are passionate gamers and developers themselves, bringing a wealth of knowledge and experience to each session.
                                Join us at {CompanyJSON.name} and take your game dev skills to the next level!
                            </p>
                            </div>
                        </div>
                    <button
                        className="wide center"
                        onClick={() => navigate(`/about`)}
                        style={{ marginTop: '2rem' }}
                    >
                        Learn More About Us
                    </button>
                    </div>
                </div>
        </>
    );
}