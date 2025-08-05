// export default async function fetchLocation() {
//     if (!navigator.geolocation) {
//         console.log("Geolocation not supported");
//         return null;
//     }

//     try {
//         // Wrap geolocation in a Promise
//         const position = await new Promise((resolve, reject) => {
//             navigator.geolocation.getCurrentPosition(resolve, reject);
//         });

//         console.log(position.coords.latitude, position.coords.longitude);
//         return {
//             lat: position.coords.latitude,
//             long: position.coords.longitude
//         };
//     } catch (err) {
//         // Geolocation failed — fallback to IP-based location
//         // try {
//         //     const res = await fetch("https://api.ipify.org");
//         //     const ip = await res.text();

//         //     const locRes = await fetch(`https://ipwho.is/${ip}`);
//         //     const data = await locRes.json();
//         //     console.log(data.latitude, data.longitude);

//         //     return { lat: data.latitude, long: data.longitude };
//         // } catch (fallbackErr) {
//         //     console.error("Failed to fetch IP-based location:", fallbackErr);
//         //     return null;
//         // }
//     }
// }