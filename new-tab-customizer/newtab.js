// Function to update the clock every second
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clockElement.textContent = timeString;
}

// Function to display a random quote
function showRandomQuote() {
    const quotes = [
        "Believe in yourself!",
        "You are capable of amazing things.",
        "Don't stop until you're proud.",
        "Every day is a new opportunity."
    ];

    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Update the clock and the quote when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    showRandomQuote();

    // Update the clock every second
    setInterval(updateClock, 1000);
});
