import React, { useState } from 'react';

import styles from "../css/FAQ.module.css"

import FAQExplanationDropdown from './FAQExplanationDropdown';

import FAQsJson from '../json/FAQs.json';

export default function FAQ() {
    const [faqs] = useState(FAQsJson["faqs"]);

    return (
        <>
            <div className='container margin-bottom-3'>
                <h1 className='header'>Frequently Asked Questions (FAQs)</h1>
                <div className={`${styles['faq']}`}>
                    {
                        faqs.map((faq, faqIndex) => {
                            return (
                                <>
                                <h1 key={faqIndex} style={{marginTop: "2rem", fontSize: "1.5rem"}}>{faq.title}</h1>
                                {
                                    faq.questions.map((question, index) => {
                                        return (
                                            <FAQExplanationDropdown json={question} key={index}/>
                                        );
                                    })
                                }
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}