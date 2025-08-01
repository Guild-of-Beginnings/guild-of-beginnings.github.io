import CompanyJSON from '../json/CompanyInfo.json';
import BookLive from "./BookLive";
import BookWaitlist from "./BookWaitlist";

export default function Book() {
    return (
        <>
        {
            CompanyJSON.book.waitlist ? <BookWaitlist /> : <BookLive />
        }
        </>
    );
}