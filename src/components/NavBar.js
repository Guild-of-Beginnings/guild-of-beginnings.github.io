import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import styles from '../css/NavBar.module.css';
import BannerStyles from '../css/Banner.module.css';

import CompanyJSON from '../json/CompanyInfo.json';

import scrollToTop from '../helpers/scrollToTop';

export default function NavBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1154) {
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
        <div className={`${styles.navbar}`}>
            <div className={styles['navbar-inner']}>
                <Link to={"/"}>
                    <img
                        src={`${process.env.PUBLIC_URL}${CompanyJSON.logoUrl}`}
                        alt="Logo"
                        className={BannerStyles.logo}
                        style={{ cursor: 'pointer' }}
                    />
                    <img
                        src={`${process.env.PUBLIC_URL}${CompanyJSON.nameUrl}`}
                        alt="Logo"
                        className={BannerStyles.logo}
                        style={{ cursor: 'pointer', height: "2rem" }}
                    />
                </Link>
                <button
                    className={`${styles['navbar-button']} ${getActiveClass(`/`)} ${isOpen ? "" : "hidden"}`}
                    onClick={() => {navigate(`/`); scrollToTop();}}
                >
                    Home
                </button>
                <button
                    className={`${styles['navbar-button']} ${getActiveClass(`/book`)} ${isOpen ? "" : "hidden"}`}
                    onClick={() => {navigate(`/book`); scrollToTop();}}
                >
                    {CompanyJSON.book.waitlist ? "Join Waitlist" : "Book Now"}
                </button>
                <button
                    className={`${styles['navbar-button']} ${getActiveClass(`/faq`)} ${isOpen ? "" : "hidden"}`}
                    onClick={() => {navigate(`/faq`); scrollToTop();}}
                >
                    FAQs
                </button>
                { CompanyJSON.bonusContent &&
                    <button
                        className={`${styles['navbar-button']} ${getActiveClass(`/bonus`)} ${isOpen ? "" : "hidden"}`}
                        onClick={() => {navigate(`/bonus`); scrollToTop();}}
                    >
                        Bonus
                    </button>
                }
                <button
                    className={`${styles['navbar-button']} ${getActiveClass(`/about`)} ${isOpen ? "" : "hidden"}`}
                    onClick={() => {navigate(`/about`); scrollToTop();}}
                >
                    About
                </button>
                <button
                    className={`${styles['navbar-toggle']} ${isOpen ? styles['open'] : ""}`}
                    onClick={() => toggleMenu()}
                >
                    <span className="hamburger-icon">&#9776;</span>
                </button>
            </div>
        </div>
    );
}