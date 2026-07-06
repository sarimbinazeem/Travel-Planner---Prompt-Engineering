const BASE_URL = "https://api.geoapify.com/v1/geocode/search";

const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

export async function searchDestinations(searchText) {

    console.log("Geoapify Key:", API_KEY);
    if (!searchText.trim()) {
        throw new Error("Please enter a destination.");
    }

    const url =
        `${BASE_URL}?text=${encodeURIComponent(searchText)}` +
        `&limit=10&apiKey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Geoapify Error:", errorData);

        throw new Error(
            errorData.message || "Failed to fetch destinations."
        );
    }



    const data = await response.json();

    return data.features;
}

export async function getDestinationById(placeId) {
    const url =
        `https://api.geoapify.com/v1/geocode/search?` +
        `filter=place:${placeId}` +
        `&apiKey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to load destination.");
    }

    const data = await response.json();

    if (!data.features.length) {
        throw new Error("Destination not found.");
    }

    return data.features[0];
}