module.exports = async (tp) => {
    const apiKey = '7249666486074dbd83e8fa9578252ff6';
    const city = 'Tracy City';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.main || !data.weather) {
            return `Error fetching weather: ${data.message || "Unknown error"}`;
        }

        const desc = data.weather[0].description.toLowerCase();
        const temp_min = data.main.temp_min;
        const temp_max = data.main.temp_max;

        // Emoji logic
        let emoji = '';
        if (desc.includes('clear')) emoji = '☀️';
        else if (desc.includes('cloud')) emoji = '☁️';
        else if (desc.includes('rain')) emoji = '🌧️';
        else if (desc.includes('storm') || desc.includes('thunder')) emoji = '🌩️';
        else if (desc.includes('snow')) emoji = '❄️';
        else if (desc.includes('mist') || desc.includes('fog')) emoji = '🌫️';
        else emoji = '🌈'; // fallback for weird stuff

        return `${emoji} High: ${temp_max}°F / Low: ${temp_min}°F`;
    } catch (error) {
        return `Weather fetch failed: ${error.message}`;
    }
}
