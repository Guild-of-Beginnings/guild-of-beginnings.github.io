import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/ImageMarquee.module.css';

const ImageMarquee = ({ images, useSubtitle2 = true, useLinks = true, cycleTime = 5 }) => {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef(null);
    const [imageWidth, setImageWidth] = useState(0);

    const touchStartX = useRef(null);

    // Resize handler
    useEffect(() => {
        const updateWidth = () => {
            if (sliderRef.current) {
                const container = sliderRef.current.parentNode;
                setImageWidth(container.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Auto cycling
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, cycleTime * 1000);

        return () => clearInterval(interval);
    }, [index, cycleTime]);

    const nextSlide = () => {
        setIndex(prev => prev + 1);
        setIsTransitioning(true);
    };

    const prevSlide = () => {
        if (index === 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(prev => prev - 1);
        }
        setIsTransitioning(true);
    };

    // Swipe detection
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    // Update slider position
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider || imageWidth === 0) return;

        // Animate only if transitioning
        slider.style.transition = isTransitioning ? 'transform 0.5s ease' : 'none';
        slider.style.transform = `translateX(-${index * imageWidth}px)`;

        if (index === images.length) {
            const handleTransitionEnd = () => {
                // Skip transition and reset to real first image
                setIsTransitioning(false);
                setIndex(0);
                slider.removeEventListener('transitionend', handleTransitionEnd);
            };
            slider.addEventListener('transitionend', handleTransitionEnd);
        }
    }, [index, imageWidth, isTransitioning, images.length]);

    // Real slides + clone of first
    const slides = [...images, images[0]];

    return (
        <div
            className={styles["marquee-container"]}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className={styles["marquee-slider"]} ref={sliderRef}>
                {slides.map((item, i) => {
                    const content = (
                        <div
                            key={i}
                            className={styles["marquee-slider-content"]}
                            style={{
                                width: imageWidth ? `${imageWidth}px` : undefined,
                                minWidth: imageWidth ? `${imageWidth}px` : undefined,
                            }}
                        >
                            <img src={item.image} alt={item['alt-text'] || `Slide ${i}`} />
                            <div className={styles["marquee-overlay-text"]}>
                                {item.subtitle}
                                {useSubtitle2 && (
                                    <>
                                        <br />
                                        {item['subtitle-2']}
                                    </>
                                )}
                            </div>
                        </div>
                    );

                    return useLinks ? (
                        <Link key={i} to={`/services/${item.service}`} title={`${item.subtitle} ${item['subtitle-2']}`}>
                            {content}
                        </Link>
                    ) : (
                        <React.Fragment key={i}>{content}</React.Fragment>
                    );
                })}
            </div>

            {/* Manual Buttons */}
            {/* <button className={styles["marquee-btn-left"]} onClick={prevSlide}>&#8592;</button>
            <button className={styles["marquee-btn-right"]} onClick={nextSlide}>&#8594;</button> */}
        </div>
    );
};

export default ImageMarquee;
