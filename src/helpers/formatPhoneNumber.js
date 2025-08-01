export function formatPhoneNumber(number) {
    // Remove all non-digit characters
    const cleaned = ('' + number).replace(/\D/g, '');
    // Match and format
    const match = cleaned.match(/^1?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `+1 (${match[1]}) ${match[2]}-${match[3]}`;
    }
    return number;
}