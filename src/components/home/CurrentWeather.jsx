const weatherLookup = {
    20: "Lightly Cloudy",
    30: "Cloudy",
    40: "Snow",
    50: "Foggy",
    60: "Drizzle",
    70: "Rain",
    80: "Snow",
    100: "Stormy"
}

export default function CurrentWeather({ weather }) {
    const getWeatherType = () => {
        for (let code of Object.keys(weatherLookup)) {
            if (weather.weather_code < code) {
                return weatherLookup[code];
            }
        }
    }

    return (
        <div>
            <h2>Current Weather:</h2>
            <p>{getWeatherType()}</p>
        </div>
    )
}