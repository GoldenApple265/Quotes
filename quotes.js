// Quotes array with 365 quotes (example placeholders)
const quotes = [
    "Quote 1",
    "Quote 2",
    "Quote 3",
    // ... up to 365 quotes
];

// Function to get the quote for the current day
function getTodayQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    return quotes[dayOfYear % quotes.length];
}

// Export the quote (or assign it globally if needed)
const todayQuote = getTodayQuote();
