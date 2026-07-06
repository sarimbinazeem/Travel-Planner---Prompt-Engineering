const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

const BASE_URL = "https://api.geoapify.com/v2/places";

async function fetchPlaces(categories, latitude, longitude, limit = 6) {
    const radius = 5000;

    const url =
        `${BASE_URL}?categories=${categories}` +
        `&filter=circle:${longitude},${latitude},${radius}` +
        `&limit=${limit}` +
        `&apiKey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to fetch places.");
    }

    const data = await response.json();

    return data.features;
}

export function getHotels(latitude, longitude) {
    return fetchPlaces("accommodation.hotel", latitude, longitude);
}

export function getTouristAttractions(latitude, longitude) {
    return fetchPlaces(
        "tourism.attraction",
        latitude,
        longitude
    );
}

export function getTransportation(latitude, longitude) {
    return fetchPlaces(
        "public_transport",
        latitude,
        longitude
    );
}