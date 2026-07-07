import DestinationCard from "./DestinationCard";

function DestinationGrid({ destinations }) {
    if (destinations.length === 0) {
        return (
                <section
                className="
                py-24
                text-center
                "
                >

                <div className="text-8xl">

                🧳

                </div>

                <h2
                className="
                mt-6
                text-4xl
                font-black
                "
                >

                Start Planning

                </h2>

                <p
                className="
                mx-auto
                mt-5
                max-w-xl
                text-lg
                "
                >

                Search any city in the world to discover
                weather,
                hotels,
                transportation,
                maps,
                and budget estimates.

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
                mt-12
                grid
                gap-8
                sm:grid-cols-2
                xl:grid-cols-3
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