import { useEffect } from 'react';

export default function BookCalendly() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <h1>Google Calendar</h1>
            <p>Ready to embark on your journey now? Use the Google Calendar widget below to schedule your free consultation.</p>

            {/* <!-- Google Calendar Appointment Scheduling begin --> */}
            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1bHpn70GHLa-GDZs_m6RVUA-_im5MLyuRn7OqEphgdEDAijKWbJAN_E9EO3rMJ_pQMDY3KyV3y?gv=true" style={{"border": "0", "height": "57rem", "width": "100%"}}frameborder="0" title="Google Calendar Free Consultation Widget"/>
            {/* <!-- end Google Calendar Appointment Scheduling --> */}
        </>
    );
}