import fetchLocation from "./fetchLocation"

export default async function fetchWeather() {
    const pos = await fetchLocation();
    if (!pos) {
        console.log("Unable to fetch location.");
        return;
    }

    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.lat}&longitude=${pos.long}&wind_speed_unit=mph&temperature_unit=fahrenheit&current=temperature_2m,wind_speed_10m,precipitation,rain,showers,snowfall,weather_code,uv_index`);
    const data = await res.json();
    console.log(data);
    return {weather: data, pos: pos};
}