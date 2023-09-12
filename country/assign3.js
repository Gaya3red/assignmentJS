// JavaScript File (script.js)

// Function to fetch country data from the Rest Countries API
function fetchCountryData() {
    const apiUrl = 'https://restcountries.com/v3.1/name/India';

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Extract relevant information from the API response
            const country = data[0];

            // Update the HTML with country information
            const countryInfoContainer = document.querySelector('.country-info');
            countryInfoContainer.innerHTML = `
                <h2>${country.name.common}</h2>
                <p>Capital: ${country.capital}</p>
                <p>Population: ${country.population.toLocaleString()}</p>
                <p>Region: ${country.region}</p>
                <p>Subregion: ${country.subregion}</p>
                <p>Flag: <img src="${country.flags.png}" alt="${country.name.common} Flag"></p>
            `;
        })
        .catch((error) => {
            console.error('Error fetching country data:', error);
            const countryInfoContainer = document.querySelector('.country-info');
            countryInfoContainer.innerHTML = '<p>Failed to fetch country data.</p>';
        });
}

// Call the fetchCountryData function when the page loads
window.addEventListener('load', fetchCountryData);
