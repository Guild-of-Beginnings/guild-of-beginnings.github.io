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
            const results = await Promise.allSettled(
                BonusJSON.content.map(async (entry) => {
                    if (!entry.visible) return null;

                    try {
                        const path = `/bonus/${entry.id}.md`;
                        const res = await fetch(path);
                        if (!res.ok) throw new Error('Markdown not found');
                        const text = (await res.text()).replace(/^\uFEFF/, '').trimStart();
                        const { attributes } = matter(text);
                        return {
                            id: entry.id,
                            title: attributes.title || 'Untitled',
                            category: attributes.category || 'Uncategorized',
                        };
                    } catch (err) {
                        console.error(`Error loading ${entry.id}:`, err);
                        return null;
                    }
                })
            );

            const loaded = results
                .filter(r => r.status === 'fulfilled' && r.value)
                .map(r => r.value);

            setBonusEntries(loaded);
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
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Topic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bonusEntries.map((entry, i) => (
                            <tr key={i} className="alt-row">
                                <td>{entry.category}</td>
                                <td>
                                    <Link to={`/bonus/${entry.id}`}>{entry.title}</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
