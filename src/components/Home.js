import { useNavigate } from 'react-router';

import ImageMarquee from './ImageMarquee';

import images from '../json/MarqueeImages.json';
import HomePreview from './HomePreview';
import ServiceList from './ServiceList';
import BookPreview from './BookPreview';
import Testimonials from './Testimonials';

export default function Home() {
    const navigate = useNavigate();

    // Group images by engine (e.g., unity, unreal, etc.)
    const grouped = images.images.reduce((acc, img) => {
        const group = img.service || 'other';
        if (!acc[group]) acc[group] = [];
        acc[group].push(img);
        return acc;
    }, {});

    // Shuffle helper
    function shuffle(arr) {
        return arr
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value);
    }

    // Pick one random image from each group
    const selectedImages = Object.values(grouped).map(groupArr => {
        const shuffled = shuffle(groupArr);
        if (groupArr[0]?.service === 'default') return [];
        return shuffled;
    });

    // Combine all selected images into a single array
    // Interleave images from each group
    const maxLen = Math.max(...selectedImages.map(arr => arr.length));
    const combinedImages = [];
    for (let i = 0; i < maxLen; i++) {
        for (let arr of selectedImages) {
            if (arr[i] !== undefined) combinedImages.push(arr[i]);
        }
    }
    
    return (
        <>
            <ImageMarquee images={combinedImages} cycleTime={5} />
            <div className='section'>
                <HomePreview />
            </div>
            <div className='section' style={{backgroundColor: 'var(--lightest-primary-color)'}}>
                <ServiceList showUpcoming={false} secondaryHeader={false} marginTop={false} />
            </div>
            <div className='section' style={{backgroundColor: 'var(--light-secondary-color)'}}>
                <Testimonials marginTop={false} />
            </div>
            <div className='section'>
                <BookPreview />
            </div>
        </>
    );
}
