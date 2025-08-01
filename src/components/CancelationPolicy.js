import CompanyJSON from '../json/CompanyInfo.json'

export default function CancelationPolicy() {
    
    const subject = encodeURIComponent(`${CompanyJSON.refunds.subject} for [name here]`);
    const body = encodeURIComponent(
        `Hi,

        I am requesting a refund for the session scheduled on [DATE] at [TIME]. I previously paid for the session on [DATE].

        [INSERT DETAILS ABOUT YOUR REQUEST]

        Thank you in advance,

        [NAME]`
    );
    const mailtoLink = `mailto:${CompanyJSON.refunds.email}?subject=${subject}&body=${body}`;

    return (
        <>
            <h1>Cancelation + Refund Policy</h1>
            <p>We understand that life can be unpredictable. If you need to cancel or reschedule a session, please do so at least 24 hours in advance to avoid being charged for the session. If you cancel with less than 24 hours notice, you will be charged for the session.</p>

            <h2>Lesson Planning Fee</h2>
            <p>The Lesson Planning fee is non-refundable and reflects the time and effort invested in tailoring your individualized learning plan prior to the first session</p>

            <h2>Full Refund Eligibility</h2>
            <p>If you paid upfront to take advantage of discounts or scheduled a session more than 24 hours in advance, you're eligible for refunds so long as you follow these steps:</p>
            <ol>
                <li>Send an email to <a href={mailtoLink} title={`Send refund request to ${CompanyJSON.refunds.email}`}>{CompanyJSON.refunds.email}</a> more than 24 hours prior to your scheduled session.</li>
                <li>Include <strong>{CompanyJSON.refunds.subject}</strong> and your name in the email subject line.</li>
                <li>In the body of the email, include the date and time of the session, the date you paid for the session, and the amount paid.</li>
            </ol>

            <p><strong>Note</strong>: Refunds are only available for sessions that have <strong>not been completed</strong>. If you have completed a session, you will not be eligible for a refund.</p>
            
            <p>Refunds are processed within 10 business days. If you have not received your refund after 10 business days, please contact us.</p>

            <p>We want to ensure that you have a positive experience with us, and we are committed to providing you with the best possible service. If you have any questions or concerns about our cancelation or refund policy, please feel free to contact us.</p>
        </>
    );
}
