import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import styles from '../css/NavBar.module.css';
import BannerStyles from '../css/Banner.module.css';

import CompanyJSON from '../json/CompanyInfo.json';

export default function NavBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        // Set initial state on mount
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const location = useLocation();
    
    const getActiveClass = (path) => location.pathname === path ? "selected" : "";
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className={`${styles.navbar}`}>
                <Link to={"/"}>
                    <img
                        src={`${process.env.PUBLIC_URL}/GameTutorLogo2.png`}
                        alt="Logo"
                        className={BannerStyles.logo}
                        style={{ cursor: 'pointer' }}
                    />
                    <h1 className='logo'>{CompanyJSON.name}</h1>
                </Link>
                <button
                    className={`${getActiveClass(`/`)} ${isOpen ? "" : "hidden"}`}
                    onClick={() => navigate(`/`)}
                >
                    Home
                </button>
                <button
                    className={`${getActiveClass(`/services`)} ${isOpen ? "" : "hidden"}`}
                    onClick={() => navigate(`/services`)}
                >
                    Services
                </button>
                <button
                    className={`${getActiveClass(`/book`)} ${isOpen ? "" : "hidden"}`}
                    onClick={() => navigate(`/book`)}
                >
                    {CompanyJSON.book.waitlist ? "Join Waitlist" : "Book Now"}
                </button>
                <button
                    className={`${getActiveClass(`/faq`)} ${isOpen ? "" : "hidden"}`}
                    onClick={() => navigate(`/faq`)}
                >
                    FAQs
                </button>
                <button
                    className={`${getActiveClass(`/about`)} ${isOpen ? "" : "hidden"}`}
                    onClick={() => navigate(`/about`)}
                >
                    About
                </button>
            </div>
            <button
                className={styles['navbar-toggle']}
                onClick={() => toggleMenu()}
            >
                <span className="hamburger-icon">&#9776;</span>
            </button>
        </>
    );
}