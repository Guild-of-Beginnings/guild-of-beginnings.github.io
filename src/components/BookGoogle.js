import styles from '../css/Book.module.css';

export default function BookGoogle() {
    return (
        <>
            <h1>Google Calendar</h1>
            <p>Ready to embark on your journey now? Use the Google Calendar widget below to schedule your free consultation.</p>

            <iframe className={`${styles['google-inline-widget']}`} src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1bHpn70GHLa-GDZs_m6RVUA-_im5MLyuRn7OqEphgdEDAijKWbJAN_E9EO3rMJ_pQMDY3KyV3y?gv=true" frameborder="0" title="Google Calendar Free Consultation Widget"/>
        </>
    );
}