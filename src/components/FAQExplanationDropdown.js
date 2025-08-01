import React, { useState } from 'react';

import styles from '../css/ExplanationDropdown.module.css'

import { parseBoldText } from '../helpers/parseBoldText';
import useHyperlinkKeywords from '../helpers/hyperlinkKeywords';

export default function FAQExplanationDropdown({json, price, discount = 0}) {
    console.log(json);
    const [isOpen, setIsOpen] = useState(null);
    
    const toggleDropdown = () => {
        setIsOpen(isOpen => !isOpen);
    };


    return (
        <div className={`${styles["dropdown-container"]}`}>
            <div className={`${styles["button-row"]}`}>
                <button
                    onClick={() => toggleDropdown()}
                    title={isOpen ? `Hide ${json.title}` : `Show ${json.title}`}
                    className={`${styles["accent-border"]}`}
                    >
                        <span>
                        <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                    </span>
                    {json.title} {json['title-subtag'] ? json['title-subtag'] : ""}
                </button>
            </div>
            <div
                className={`${styles["dropdown-content"]} ${isOpen ? styles.open : 'hidden'}`}
            >
                <>
                    <div className={`${styles["dropdown-text-no-margin"]}`}>
                        <p>{useHyperlinkKeywords(parseBoldText(json.description))}</p>
                    </div>
                </>
            </div>
        </div>
    );
}