import ImageMarquee from './ImageMarquee';
import ServiceList from './ServiceList';

import images from '../json/MarqueeImages.json';

export default function Services() {
    return (
        <>
            <ImageMarquee images={images.images} cycleTime={5} />
            <div className='container margin-bottom-3'>
                <ServiceList />
            </div>
        </>
    );
}
