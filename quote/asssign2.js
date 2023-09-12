// JavaScript File (script.js)

// Function to fetch a random quote from the Quotes Free API
function fetchRandomQuote() {
    const apiUrl = 'https://type.fit/api/quotes';

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Get a random quote from the data
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];

            // Update the HTML with the random quote
            const quoteContainer = document.querySelector('.quote');
            quoteContainer.innerHTML = `
                <p>"${randomQuote.text}"</p>
                <p>- ${randomQuote.author || 'Unknown'}</p>
            `;
        })
        .catch((error) => {
            console.error('Error fetching a random quote:', error);
            const quoteContainer = document.querySelector('.quote');
            quoteContainer.innerHTML = '<p>Failed to fetch a quote.</p>';
        });
}

// Add an event listener to the "New Quote" button
const newQuoteButton = document.getElementById('new-quote-btn');
newQuoteButton.addEventListener('click', fetchRandomQuote);

// Fetch and display a random quote when the page loads
window.addEventListener('load', fetchRandomQuote);
