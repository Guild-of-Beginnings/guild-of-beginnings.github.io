import React, { useState, useEffect, useRef } from 'react';

import styles from '../css/Testimonial.module.css';

export default function Testimonial({ testimonial }) {

    return (
        <div className={`${styles['testimonial']}`}>
            <h3 style={{color: "var(--primary-color)", textAlign: "center"}}>{testimonial.client}: {testimonial['learning-path']}</h3>
            <p>{testimonial.statement}</p>
            {/* <p style={{fontStyle: "italic"}}>- {testimonial.client}</p>
            <p style={{fontStyle: "italic"}}>Learning Path: {testimonial['learning-path']}</p> */}
        </div>
    );
};
