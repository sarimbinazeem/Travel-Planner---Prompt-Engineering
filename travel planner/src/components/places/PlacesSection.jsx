import PlaceCard from "./PlaceCard";
import EmptyState from "../common/EmptyState"

function PlacesSection({ title, places }) {
    return (
        <section className="rounded-2xl border bg-white p-8 shadow">

            <h2 
                className="
                    mb-8
                    text-3xl
                    font-black
                    text-slate-800
                    md:text-4xl
                "
            >
                {title}
            </h2>

            {places.length === 0 ? (
                <p className="text-gray-500">
                    <EmptyState
                        icon="📍"
                        title="Nothing Found"
                        message="No nearby places were found for this category."
                    />
                </p>
            ) : (
                <div className="                
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3">
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