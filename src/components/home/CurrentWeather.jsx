import { Container, Row } from "react-bootstrap";
import WeatherCard from "./WeatherCard";

const weatherLookup = {
    20: "Sunny",
    30: "Cloudy",
    40: "Snow",
    50: "Foggy",
    60: "Drizzle",
    70: "Rain",
    80: "Snow",
    100: "Stormy"
}

export default function CurrentWeather({ weather, loc, units }) {
    const getWeatherType = () => {
        for (let code of Object.keys(weatherLookup)) {
            if (weather.weather_code < code) {
                return weatherLookup[code];
            }
        }
    }

    return (
        <div>
            <h2>Current Weather in {loc.city}:</h2>
            <h3>{getWeatherType()}</h3>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <WeatherCard title="Temperature" data={weather.temperature_2m} unit={units.temperature_2m}/>
                    {
                        weather.precipitation ? <WeatherCard title="Precipitation" data={weather.precipitation} unit={units.precipitation}/>: "" 
                    }
                    <WeatherCard title="UV" data={weather.uv_index} unit={units.uv_index}/>
                    <WeatherCard title="Wind Speed" data={weather.wind_speed_10m} unit={units.wind_speed_10m} />
                </Row>
            </Container>
        </div>
    )
}