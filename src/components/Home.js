import { useNavigate } from 'react-router';

import ImageMarquee from './ImageMarquee';
import FeaturedServices from './FeaturedServices';
import AboutPreview from './AboutPreview';

import images from '../json/MarqueeImages.json';

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
            <div className='container'>
                <FeaturedServices />
                <button
                    className="wide center"
                    onClick={() => navigate('/services')}
                    title="View all services"
                    style={{ marginTop: '2rem' }}
                >
                    View All Services
                </button>
                {/* <hr /> */}
                <AboutPreview />
            </div>
        </>
    );
}
