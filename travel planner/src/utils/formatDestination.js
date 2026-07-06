export function formatDestination(features) {
    return features.map((feature) => ({
        id: feature.properties.place_id,

        city:
            feature.properties.city ||
            feature.properties.name ||
            "Unknown",

        country:
            feature.properties.country || "Unknown",

        state:
            feature.properties.state || "",

        latitude:
            feature.properties.lat,

        longitude:
            feature.properties.lon,

        formatted:
            feature.properties.formatted,
    }));
}