import React, { useState } from 'react';
import { Link } from "react-router";

import styles from "../css/Footer.module.css"

import scrollToTop from '../helpers/scrollToTop';
import { formatPhoneNumber } from "../helpers/formatPhoneNumber";

import ServicesJson from '../json/Services.json';
import CompanyJSON from '../json/CompanyInfo.json';

export default function Footer() {
    const [services] = useState(ServicesJson.services);
    const getServiceById = (id) => services.find(service => service.id === id && service['currently-offered'] === true);

    return (
        <>
            <div className={`${styles['footer-div']}`}>
                <div className='container'>

                <div className={`${styles['footer-links']}`}
                >
                    <div className={`${styles['group']}`}>
                        <div className={`${styles['footer-signage']}`}>
                                <img
                                    src={`${process.env.PUBLIC_URL}${CompanyJSON.logoWhiteUrl}`}
                                    alt="Logo"
                                    />
                                <h1 className='logo'>{CompanyJSON.name}</h1>
                        </div>
                        <p>Ready to make your dream game a reality? {CompanyJSON.name} offers one-on-one tutoring tailored to your goals. {CompanyJSON.book.waitlist ? "Reserve your spot on our waitlist today!" : "Book your first session today and start building with confidence!"}</p>
                    </div>
                    <div className={`${styles['group']}`}>
                        <h1><Link to={'/services'} className='header-link' onClick={scrollToTop}>Services</Link></h1>
                        <ul>
                        <li key={"Services"}><Link to={`/services`} onClick={scrollToTop}>All Services</Link></li>
                        {services.map(({id}, i) => {
                            const service = getServiceById(id);
                            if (!service) {
                                return null;
                            }
                            return (
                                <li key={i}><Link to={`/services/${service.id}`} onClick={scrollToTop}>{service.name}</Link></li>
                            );
                        })}
                        </ul>
                    </div>
                    <div className={`${styles['group']}`}>
                        <h1>Resources</h1>
                        <ul>
                            <li key={"Home"}><Link to={"/"} onClick={scrollToTop}>Home</Link></li>
                            <li key={"Book"}><Link to={"/book"} onClick={scrollToTop}>{CompanyJSON.book.waitlist ? "Join Waitlist" : "Book a Session"}</Link></li>
                            <li key={"About"}><Link to={"/about"} onClick={scrollToTop}>About</Link></li>
                            <li key={"Privacy"}><Link to={CompanyJSON.privacyPolicy.policyUrl} onClick={scrollToTop}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className={`${styles['group']}`}>
                        <h1><Link to={'/book'} className='header-link' onClick={scrollToTop}>Contact</Link></h1>
                        <ul>
                            <li key={"Phone"}><i className="fas fa-phone" style={{ fontSize: 16, color: "white" }}></i>{" "}<Link to={`tel:${CompanyJSON.phone}`} className='default-font'>{formatPhoneNumber(CompanyJSON.phone)}</Link></li>
                            <li key={"Email"}><i className="fas fa-envelope" style={{ fontSize: 16, color: "white" }}></i>{" "}<Link to={`mailto:${CompanyJSON.email}`}>{CompanyJSON.email}</Link></li>
                            <li key={"Discord"}><i className="fab fa-discord" style={{ fontSize: 16, color: "white" }}></i>{" "}<Link to={CompanyJSON.socialMediaLinks.discord}>Join Discord</Link></li>
                        </ul>
                    </div>
                </div>

                <p className={`center`}>&copy; 2025 {CompanyJSON.name}</p>
            </div>
            </div>
        </>
    );
}