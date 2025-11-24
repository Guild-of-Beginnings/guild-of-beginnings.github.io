
import BookLink from "./BookLink";

import { formatPhoneNumber } from "../helpers/formatPhoneNumber";

import CompanyJSON from '../json/CompanyInfo.json';

export default function BookPreview() {
    const phoneNumber = CompanyJSON.phone;
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
    const mailtoLink = `mailto:${CompanyJSON.book.email}?subject=${subject}&body=${body}`;

    return (
        <>
        
            <div className='container'>
                <h1 className={`col-12 header no-margin-top`}>Ready to begin your journey?</h1>

                <p>Here are some easy ways to schedule a free consultation. We look forward to connecting and helping you take the next step.</p>

                <div className="button-row">
                    <BookLink
                        link={mailtoLink}
                        title={`Click here to email us at ${CompanyJSON.book.email}`}
                        classInfo="hover-lift"
                        displayTextLine1={
                            <>
                                Email{" "}
                                <i className="fas fa-envelope" style={{ fontSize: 16, color: "white" }}></i>
                            </>
                        }
                        displayTextLine2={CompanyJSON.book.email}
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