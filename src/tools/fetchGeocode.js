// import {
//   LocationClient,
//   SearchPlaceIndexForPositionCommand
// } from "@aws-sdk/client-location";
// import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

// const REGION = "us-east-2";
// const IDENTITY_POOL_ID = "us-east-2:111d386b-6f5c-4790-9e61-e88f9385c542";
// const PLACE_INDEX_NAME = "GeoLocation";

// const client = new LocationClient({
//   region: REGION,
//   credentials: fromCognitoIdentityPool({
//     identityPoolId: IDENTITY_POOL_ID,
//     clientConfig: { region: REGION }
//   })
// });

// export default async function fetchGeocode(lat, lon) {
//   const command = new SearchPlaceIndexForPositionCommand({
//     IndexName: PLACE_INDEX_NAME,
//     Position: [lon, lat] // [longitude, latitude]
//   });

//   try {
//     const response = await client.send(command);
//     const place = response.Results?.[0]?.Place;

//     return {
//       label: place?.Label,
//       city: place?.Municipality,
//       region: place?.Region,
//       country: place?.Country
//     };
//   } catch (err) {
//     console.error("Reverse geocode failed:", err);
//     return null;
//   }
// }
