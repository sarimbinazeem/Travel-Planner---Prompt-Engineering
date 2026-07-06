function DestinationHero({ destination }) {
    return (
            <section className="
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-r
            from-blue-700
            via-blue-600
            to-cyan-500
            p-10
            text-white
            shadow-xl
            ">
            <p className="text-lg opacity-90">
                Explore
            </p>

            <h1 className="text-5xl font-extrabold tracking-wide">
                {destination.city}
            </h1>

            <p className="mt-3 text-xl text-blue-100">
                📍 {destination.country}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

                <div className="rounded-full bg-white/20 px-4 py-2">

                    🌍 Latitude: {destination.latitude}

                </div>

                <div className="rounded-full bg-white/20 px-4 py-2">

                    🌎 Longitude: {destination.longitude}

                </div>

            </div>
        </section>
    );
}

export default DestinationHero;