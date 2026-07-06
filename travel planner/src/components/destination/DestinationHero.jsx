function DestinationHero({ destination }) {
    return (
        <section
            className="
                rounded-3xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                p-10
                text-white
                shadow-lg
            "
        >
            <p className="text-lg opacity-90">
                Explore
            </p>

            <h1 className="mt-3 text-5xl font-bold">
                {destination.city}
            </h1>

            <p className="mt-4 text-xl">
                {destination.country}
            </p>
        </section>
    );
}

export default DestinationHero;