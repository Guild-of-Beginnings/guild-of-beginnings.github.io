import React, { useState } from 'react';
import { Link } from 'react-router';

import styles from '../css/ExplanationDropdown.module.css'

import { parseBoldText } from '../helpers/parseBoldText';

export default function CostExplanationDropdown({json, price, discount = 0}) {
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
                    >
                    <span>
                        <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                    </span>
                    {json.title} {(discount < 0.04) ? "" : `- ${discount * 100}% off`} {json['title-subtag'] ? json['title-subtag'] : ""}
                </button>
            </div>
            <div
                className={`${styles["dropdown-content"]} ${isOpen ? styles.open : 'hidden'}`}
            >
                <>
                    <div className={`${styles["dropdown-text-no-margin"]}`}>
                        <p>{parseBoldText(json.description)}</p>
                        { json['show-total'] &&
                            <h5 className='no-underline'><Link to={"/book"}>Add-on Price: ${price - (price * discount)}</Link></h5>
                        }
                    </div>
                </>
            </div>
        </div>
    );
}