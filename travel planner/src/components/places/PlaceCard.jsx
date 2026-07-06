function PlaceCard({ place }) {
    const properties = place.properties;
    const latitude = properties.lat;
    const longitude = properties.lon;

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    return (
            <article
            className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
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
                    mt-6
                    inline-flex
                    items-center
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    px-5
                    py-3
                    font-semibold
                    text-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                "
            >
                Open in Google Maps
            </a>

        </article>
    );
}

export default PlaceCard;