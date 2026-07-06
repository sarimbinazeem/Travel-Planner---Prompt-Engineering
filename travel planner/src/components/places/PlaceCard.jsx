function PlaceCard({ place }) {
    const properties = place.properties;

    return (
        <article className="rounded-xl border bg-white p-5 shadow-sm">

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

        </article>
    );
}

export default PlaceCard;