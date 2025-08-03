import styles from "../css/NFC.module.css"

import { formatPhoneNumber } from "../helpers/formatPhoneNumber";

import CompanyJSON from '../json/CompanyInfo.json';

export default function NFC() {
    const saveContact = () => {
        const vCardData = `BEGIN:VCARD\n` +
            `VERSION:3.0\n` +
            `N:Lafferty;Robert;;;\n` +
            `FN:Robert Lafferty\n` +
            `ORG:${CompanyJSON.name}\n` +
            `TITLE:Owner, ${CompanyJSON.name}\n` +
            `TEL;TYPE=WORK:${CompanyJSON.phone}\n` +
            `EMAIL;TYPE=WORK:${CompanyJSON.email}\n` +
            `URL;TYPE=Website:${CompanyJSON.website}\n` +
            `END:VCARD\n`;

        // Create a Blob from the vCard data
        const blob = new Blob([vCardData], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);

        // Create a temporary link and click it
        const link = document.createElement("a");
        link.href = url;
        link.download = "robert-lafferty.vcf"; // or any filename
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <div className="container">
                <div className={styles['nfc-container']}>
                    <div className={styles['nfc-info']}>
                        <img src={`${process.env.PUBLIC_URL}/GoBLogoColor.png`} alt={`${CompanyJSON.name} Owner Headshot`} className={styles['nfc-image']} />
                        <h3><strong>Robert Lafferty</strong></h3>
                        <p>Owner, {CompanyJSON.name}</p>
                    </div>
                    <button onClick={saveContact} className="secondary"><i className="fas fa-download" aria-hidden="true" />{" "}Save Contact</button>
                    <h4>Contact Info</h4>
                    <p><i className="fas fa-phone" style={{ fontSize: 16 }} /><a href={`tel:${CompanyJSON.phone}`}>{formatPhoneNumber(CompanyJSON.phone)}</a></p>
                    <p><i className="fas fa-envelope" style={{ fontSize: 16 }} /><a href={`mailto:${CompanyJSON.email}`}>{CompanyJSON.email}</a></p>
                    <p><i className="fas fa-globe" aria-hidden="true" /><a href={CompanyJSON.website}>{CompanyJSON.website}</a></p>
                    <p><i className="fab fa-linkedin" aria-hidden="true" /><a href="https://www.linkedin.com/in/rclafferty">Connect on LinkedIn</a></p>
                </div>
            </div>
        </>
    );
}