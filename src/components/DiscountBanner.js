import { Link } from 'react-router';

import styles from '../css/DiscountBanner.module.css'

export default function DiscountBanner() {
    return (
        <>
            <Link
                to={"/book"}
                className={`hover-lift ${styles["discount-banner"]} ${styles["discount-banner-link"]}`}
                title="Limited time: Sample the first two sessions of any learning plan for just $100!"
            >
                <h1>
                    <span className={styles["highlight"]}>Curious</span> but still unsure? For a limited time, sample the <span className={styles["highlight"]}>first two sessions</span> of any learning plan for only <span className={styles["highlight"]}>$100</span>! Click here to get started.
                </h1>
            </Link>
        </>
    );
}