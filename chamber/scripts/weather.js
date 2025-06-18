document.addEventListener('DOMContentLoaded', () => {
    const apiKey = "YOUR_API_KEY";
    const weatherDiv = document.getElementById('weather-data');
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ota,NG&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            weatherDiv.innerHTML = `
                <p>${Math.round(data.main.temp)}°C</p>
                <p>${data.weather[0].description}</p>
            `;
        })
        .catch(() => {
            weatherDiv.innerHTML = `<p>Weather data unavailable</p>`;
        });
});