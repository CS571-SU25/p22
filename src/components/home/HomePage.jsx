import CurrentWeather from "./CurrentWeather"

export default function HomePage({ weather, loc, units }) {
    return <>
        <CurrentWeather weather={weather} loc={loc} units={units} />
    </> 
}