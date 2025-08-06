
import { Link } from 'react-router-dom';
import { useState, } from 'react';

import scrollToTop from '../helpers/scrollToTop';

import keywordJSON from '../json/LinkKeywords.json';

export default function UseHyperlinkKeywords(nodes) {
    const [keywords] = useState(keywordJSON.keywords);

    if (typeof nodes === 'string') {
        nodes = [nodes];
    }

    return nodes.flatMap((node, idx) => {
        if (typeof node !== 'string') return node;

        let result = [];
        let remaining = node;

        while (remaining.length > 0) {
            let found = false;

            for (const { keyword, link, enabled } of keywords) {
                if (!enabled) continue;

                if (remaining.startsWith(keyword)) {
                    result.push(
                        <Link key={`${idx}-${result.length}`} to={link} onClick={scrollToTop}>
                            {keyword}
                        </Link>
                    );
                    remaining = remaining.slice(keyword.length);
                    found = true;
                    break;
                }
            }

            if (!found) {
                // Add one character and continue
                result.push(remaining[0]);
                remaining = remaining.slice(1);
            }
        }

        return result;
    });
}
