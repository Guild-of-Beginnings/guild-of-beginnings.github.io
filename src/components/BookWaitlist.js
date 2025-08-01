import styles from '../css/BookWaitlist.module.css'

import BookLink from "./BookLink";

import { formatPhoneNumber } from "../helpers/formatPhoneNumber";

import CompanyJSON from '../json/CompanyInfo.json';

export default function BookWaitlist() {
    const phoneNumber = CompanyJSON.phone; // Replace with your phone number
    const telLink = `tel:${phoneNumber}`;

    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    const subject = encodeURIComponent("Tutoring Inquiry");
    const body = encodeURIComponent(
        `Hi,

        I am interested in tutoring. Please connect me with a tutor.

        [INSERT DETAILS ABOUT YOUR REQUEST]

        Thank you in advance,

        [NAME]`
    );
    const mailtoLink = `mailto:${CompanyJSON.email}?subject=${subject}&body=${body}`;

    return (
        <>
            <div className='container'>
                <h1 className={`col-12 header`}>Begin Your Journey - Waitlist Now Open!</h1>

                <p>The forge is lit and the scrolls prepared! The Guild is nearly ready to welcome new adventurers! Our one-on-one game development and programming sessions are set to launch in late August 2025. While we're still adding the final touches to the realm, booking isn't open just yet.</p>

                <p>But fear not, brave souls! You can still secure your place in the Guild of Beginnings. By joining our waitlist, you'll be the first to know when sessions are available. Whether you're learning your first line of code or charting new territory in design or development, your quest begins here.</p>

                <iframe className={styles['google-form']} src="https://forms.gle/WkkWTdMYwqNMHBJR9?embedded=true" frameborder="0" marginheight="0" marginwidth="0" title="Guild of Beginnings Google Form Waitlist">Loading…</iframe>

                <p>If the above embed doesn't work for any reason, please click here to sign up for the waitlist: <a href="https://forms.gle/WkkWTdMYwqNMHBJR9" alt="">https://forms.gle/WkkWTdMYwqNMHBJR9</a></p>

                <h2>Contact Us</h2>
                <p>Have questions about how sessions work, what topics we cover, or how to choose the right path for your goals? We're happy to help. Reach out anytime, and a member of the Guild will get back to you with answers, guidance, and next steps. No pressure, just support for your journey ahead!</p>
                <div className="button-row">
                    <BookLink
                        link={mailtoLink}
                        title={`Click here to email us at ${CompanyJSON.email}`}
                        classInfo="hover-lift"
                        displayTextLine1={
                            <>
                                Email{" "}
                                <i className="fas fa-envelope" style={{ fontSize: 16, color: "white" }}></i>
                            </>
                        }
                        displayTextLine2={CompanyJSON.email}
                    />
                    <BookLink
                        link={telLink}
                        title={`Click here to call us at ${formattedPhoneNumber}`}
                        classInfo="hover-lift"
                        displayTextLine1={
                            <>
                                Phone{" "}
                                <i className="fas fa-phone" style={{ fontSize: 16, color: "white" }}></i>
                            </>
                        }
                        displayTextLine2={formattedPhoneNumber}
                        defaultFont={true}
                    />
                    <BookLink
                        link={CompanyJSON.socialMediaLinks.discord}
                        title="Click here to join the discord server"
                        classInfo="hover-lift"
                        displayTextLine1={
                            <>
                                Discord{" "}
                                <i className="fab fa-discord" style={{ fontSize: 16, color: "white" }}></i>
                            </>
                        }
                        displayTextLine2={CompanyJSON.socialMediaLinks.discord}
                    />
                </div>

            </div>
        </>
    );
}