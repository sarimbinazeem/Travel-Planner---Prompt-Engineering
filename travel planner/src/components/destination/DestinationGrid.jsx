import DestinationCard from "./DestinationCard";

function DestinationGrid({ destinations }) {
    if (destinations.length === 0) {
        return (
            <section
                className="
                    rounded-3xl
                    border-2
                    border-dashed
                    border-slate-300
                    bg-slate-50
                    py-20
                    text-center
                "
            >

                <div className="text-7xl">

                    🧳

                </div>

                <h2 className="mt-6 text-3xl font-black">

                    Start Planning

                </h2>

                <p className="mx-auto mt-5 max-w-md">

                    Search for any destination to explore
                    live weather,
                    nearby hotels,
                    famous attractions,
                    transportation,
                    and estimated travel costs.

                </p>

            </section>
        );
    }

    return (
        <>
            <h2 className="section-title">

            Search Results

            </h2>
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
        </>


    );
}

export default DestinationGrid;