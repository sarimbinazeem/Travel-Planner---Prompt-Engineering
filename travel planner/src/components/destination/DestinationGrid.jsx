import DestinationCard from "./DestinationCard";

function DestinationGrid({ destinations }) {
    if (destinations.length === 0) {
        return (
            <p className="mt-8 text-center text-gray-500">
                Search for a destination to begin planning your trip.
            </p>
        );
    }

    return (
        <div
            className="
                mt-8
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
            "
        >
            {destinations.map((destination) => (
                <DestinationCard
                    key={destination.id}
                    destination={destination}
                />
            ))}
        </div>
    );
}

export default DestinationGrid;