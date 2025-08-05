export default async function fetchLocation() {
    if (!navigator.geolocation) {
        console.log("Geolocation not supported");
        return null;
    }

    try {
        // Wrap geolocation in a Promise
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        console.log(position.coords.latitude, position.coords.longitude);
        return {
            lat: position.coords.latitude,
            long: position.coords.longitude
        };
    } catch (err) {
        // Geolocation failed — fallback to IP-based location
        try {
            const res = await fetch("https://api.ipify.org");
            const ip = await res.text();

            const locRes = await fetch(`https://api.ipgeolocation.io/v2/ipgeo?apiKey=a858d786813e46279445d41f5aad29d2&ip=${ip}`);
            const data = await locRes.json();
            console.log(data.location.latitude, data.location.longitude);

            return { lat: data.location.latitude, long: data.location.longitude };
        } catch (fallbackErr) {
            console.error("Failed to fetch IP-based location:", fallbackErr);
            return null;
        }
    }
}