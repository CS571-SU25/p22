import CurrentWeather from "./CurrentWeather"

export default function Home({ weather }) {
    return <>
        <h1>Welcome to the Activity Generator</h1>
        <CurrentWeather weather={weather}/>
    </> 
}