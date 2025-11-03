import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import matter from 'front-matter';

import ImageMarquee from './ImageMarquee';

import BonusJSON from '../json/BonusContent.json';
import images from '../json/MarqueeImages.json';

export default function BonusContentList() {
    const [bonusEntries, setBonusEntries] = useState([]);

    // Fetch markdown metadata for each entry
    useEffect(() => {
        async function loadMarkdown() {
            const categories = [];

            // Process each category
            for (const categoryObj of BonusJSON.content) {
                if (!categoryObj.visible) continue;

                // Process each page in the category
                const categoryEntries = await Promise.allSettled(
                    categoryObj.pages.map(async (page) => {
                        if (!page.visible) return null;
                        
                        try {
                            const path = `/bonus/${page.id}.md`;
                            const res = await fetch(path);
                            if (!res.ok) throw new Error('Markdown not found');
                            
                            const text = (await res.text()).replace(/^\uFEFF/, '').trimStart();
                            const { attributes } = matter(text);
                            
                            return {
                                id: page.id,
                                title: attributes.title || 'Untitled',
                            };
                        } catch (err) {
                            console.error(`Error loading ${page.id}:`, err);
                            return null;
                        }
                    })
                );

                // Collect successful entries
                const pages = categoryEntries
                    .filter(r => r.status === 'fulfilled' && r.value)
                    .map(r => r.value);

                categories.push({
                    category: categoryObj.category,
                    pages: pages
                });
            }

            setBonusEntries(categories);
        }

        loadMarkdown();
    }, []);

    // Shuffle + group images
    const grouped = images.images.reduce((acc, img) => {
        const group = img.service || 'other';
        if (!acc[group]) acc[group] = [];
        acc[group].push(img);
        return acc;
    }, {});

    const shuffle = (arr) =>
        arr
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value);

    const selectedImages = Object.values(grouped).map((groupArr) =>
        groupArr[0]?.service === 'default' ? [] : shuffle(groupArr)
    );

    const maxLen = Math.max(...selectedImages.map((arr) => arr.length));
    const combinedImages = [];
    for (let i = 0; i < maxLen; i++) {
        for (let arr of selectedImages) {
            if (arr[i] !== undefined) combinedImages.push(arr[i]);
        }
    }

    return (
        <>
            <ImageMarquee images={combinedImages} cycleTime={5} />
            <div className="container">
                <h1 className="col-12 header">Free Bonus Content</h1>
                
                {bonusEntries.map((categoryObj) => (
                    <div key={categoryObj.category}>
                        <table>
                            <thead>
                                <tr>
                                    <th>{categoryObj.category} Topics</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryObj.pages.map((page) => (
                                    <tr key={page.id}>
                                        <td>
                                            <Link to={`/bonus/${page.id}`}>{page.title}</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </>
    );
}