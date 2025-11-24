import { useState } from 'react';
import { useNavigate } from 'react-router';

import styles from '../css/Home.module.css';
import ServiceCardStyles from '../css/ServiceCard.module.css';

import ServicesJson from '../json/Services.json';
import CompanyJSON from '../json/CompanyInfo.json';


export default function HomePreview() {
    return (
        <>
            <h1 className="col-12 header">The Guild's Purpose</h1>
            <p style={{fontSize: "1.8rem", textAlign: "center"}}>We help learners level up beyond generic tutorials through personalized guidance crafted for each unique development journey.</p>
        </>
    );
}