import PlaceCard from "./PlaceCard";

function PlacesSection({ title, places }) {
    return (
        <section className="rounded-2xl border bg-white p-8 shadow">

            <h2 className="mb-6 text-2xl font-bold">
                {title}
            </h2>

            {places.length === 0 ? (
                <p className="text-gray-500">
                    No results found.
                </p>
            ) : (
                <div className="grid gap-4 md:grid-cols-2">
                    {places.map((place) => (
                        <PlaceCard
                            key={place.properties.place_id}
                            place={place}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default PlacesSection;