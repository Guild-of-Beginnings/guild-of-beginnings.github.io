import styles from '../css/PriceChart.module.css'

export default function PriceChart({allOffers, caveats}) {

    const isIntroOfferAvailable = false;
    
    return (
        <>
        <div className={styles["price-chart"]}>
        <table>
            <thead>
                <tr>
                    <th></th>
                    {
                        allOffers.map((offer, index) => (
                            <th key={index}>{offer.title}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {/* Example data, replace with actual data */}
                { isIntroOfferAvailable &&
                    <tr>
                        <td><strong>Two Intro Sessions</strong></td>
                        {
                            allOffers.map((offer, index) => (
                                <td key={index}>{`${offer['include-intro-sessions'] ? "Yes" : "-"}`}</td>
                            ))
                        }
                    </tr>
                }
                <tr>
                    <td><strong>Full Plan</strong></td>
                    {
                        allOffers.map((offer, index) => (
                            <td key={index}>{`${offer['include-full-plan'] ? "Yes" : "-"}`}</td>
                        ))
                    }
                </tr>
                <tr>
                    <td><strong>Discount on Price</strong></td>
                    {
                        allOffers.map((offer, index) => (
                            <td key={index}>{`${offer['discount'] > 0.04 ? `${offer.discount * 100}%` : "-"}`}</td>
                        ))
                    }
                </tr>
                <tr>
                    <td><strong>Discount on Future Plans</strong></td>
                    {
                        allOffers.map((offer, index) => (
                            <td key={index}>{`${offer['discount-future-plan'] > 0.04 ? `${offer['discount-future-plan'] * 100}%` : "-"}`}</td>
                        ))
                    }
                </tr>
                <tr>
                    <td><strong>Sandbox Project</strong></td>
                    {
                        allOffers.map((offer, index) => (
                            <td key={index}>{`${offer['include-sandbox-project'] ? "Yes" : "-"}`}</td>
                        ))
                    }
                </tr>
            </tbody>
        </table>
        </div>

        {
            caveats && caveats.length > 0 && caveats.map((caveat, index) => (
                <p key={index} className={`${styles["caveat"]} col-12 mt-3`}>{caveat}</p>
            ))
        }
        {
            isIntroOfferAvailable && 
            <p>*** = Introductory offer price will be credited towards the final price of another qualifying plan should you choose to continue within 1 month of completing the intro sessions.</p>
        }
        </>
    );
}
