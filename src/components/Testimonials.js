import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import styles from '../css/Testimonial.module.css';

import TestimonialsJSON from '../json/Testimonials.json';

import Testimonial from './Testimonial';

import scrollToTop from '../helpers/scrollToTop';

export default function Testimonials({ marginTop = true, cycleTime = 5 }) {
    const navigate = useNavigate();
    
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index === TestimonialsJSON.testimonials.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index === 0) {
            setIndex(TestimonialsJSON.testimonials.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <div
            className={`container`}
        >
            <h1 className='col-12 header no-margin-top'>Testimonials</h1>
            <div className={`${styles['testimonial-subsection']}`}>

                <div className={`${styles['testimonial-with-nav-buttons']}`}>
                    <button
                        className={`hover-lift ${styles['testimonial-nav-button']}`}
                        onClick={() => {prevSlide();}}
                        title="Previous Testimonial"
                    >
                        <i className="fas fa-arrow-circle-left" style={{ fontSize: 24 }}></i>
                    </button>
                    <Testimonial testimonial={TestimonialsJSON.testimonials[index]} />
                    <button
                        className={`hover-lift ${styles['testimonial-nav-button']}`}
                        onClick={() => {nextSlide();}}
                        title="Next Testimonial"
                    >
                        <i className="fas fa-arrow-circle-right" style={{ fontSize: 24 }}></i>
                    </button>
                </div>

                {/* <hr />
                {
                    TestimonialsJSON.testimonials.map((t, id) => {
                        return (
                            <Testimonial key={id} testimonial={t} />
                        );
                    })
                } */}
            </div>

            <button
                className={`extra-wide center ${styles['home-cta-button']}`}
                onClick={() => {navigate(`/book`); scrollToTop()}}
            >
                Click here to forge your own adventure!
            </button>
        </div>
    );
};
