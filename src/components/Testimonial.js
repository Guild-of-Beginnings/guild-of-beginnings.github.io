import styles from '../css/Testimonial.module.css';

export default function Testimonial({ testimonial }) {

    return (
        <div className={`${styles['testimonial']}`}>
            <h3 style={{color: "var(--primary-color)", textAlign: "center"}}>{testimonial.client}: {testimonial['learning-path']}</h3>
            <p>{testimonial.statement}</p>
        </div>
    );
};
