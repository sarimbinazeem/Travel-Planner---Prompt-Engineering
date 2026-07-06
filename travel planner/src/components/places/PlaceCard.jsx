function PlaceCard({ place }) {
    const properties = place.properties;
    const latitude = properties.lat;
    const longitude = properties.lon;

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    return (
            <article
                className="
                    rounded-xl
                    border
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                "
            >

            <h3 className="text-lg font-bold">
                {properties.name || "Unnamed Place"}
            </h3>

            <p className="mt-2 text-gray-600">
                {properties.formatted}
            </p>

            {properties.distance && (
                <p className="mt-2 text-sm text-blue-600">
                    {Math.round(properties.distance)} m away
                </p>
            )}

            <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    mt-5
                    inline-flex
                    items-center
                    rounded-lg
                    bg-blue-600
                    px-4
                    py-2
                    text-white
                    transition
                    hover:bg-blue-700
                "
            >
                Open in Google Maps
            </a>

        </article>
    );
}

export default PlaceCard;