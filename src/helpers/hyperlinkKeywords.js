
import { Link } from 'react-router-dom';
import { useState, } from 'react';

import scrollToTop from '../helpers/scrollToTop';

import keywordJSON from '../json/LinkKeywords.json';

export default function useHyperlinkKeywords(nodes) {
    const [keywords] = useState(keywordJSON.keywords);
    // nodes can be string or array of React elements/strings
    if (typeof nodes === 'string') {
        nodes = [nodes];
    }
    return nodes.flatMap((node, idx) => {
        if (typeof node === 'string') {
            // Split string into words, whitespace, and punctuation, preserving all parts
            const parts = node.match(/(\w+|\s+|[^\w\s]+)/gu) || [];
            return parts.map((part, index) => {
                const keywordObj = keywords.find(({ keyword }) => part.trim() === keyword);
                if (keywordObj && keywordObj.enabled && part.trim()) {
                    return (
                        <Link key={`${idx}-${index}`} to={keywordObj.link} onClick={scrollToTop}>
                            {part}
                        </Link>
                    );
                }
                return part;
            });
        }
        // If already a React element, return as is
        return node;
    });
};