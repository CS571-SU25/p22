import CurrentWeather from "./CurrentWeather"

export default function HomePage({ weather, loc, units }) {
    return <>
        <h1 style={{margin: 20}}>Welcome to the Activity Generator</h1>
        <CurrentWeather weather={weather} loc={loc} units={units} />
    </> 
}