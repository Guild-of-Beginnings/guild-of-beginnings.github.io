import React from 'react';

export function parseBoldText(text) {
    const parts = text.split(/(\*\*[^*]+\*\*)/); // Match **bold** parts
    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
}