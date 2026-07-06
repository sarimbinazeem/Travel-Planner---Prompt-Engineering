function DestinationHero({ destination }) {
    return (
            <section className="
            rounded-xl
            bg-white/15
            p-5
            backdrop-blur
            transition-all
            duration-300
            hover:bg-white/20
            hover:-translate-y-1
            ">
                
            <p className="text-lg opacity-90">
                Explore
            </p>

            <h1 className="text-5xl font-extrabold tracking-wide">
                {destination.city}
            </h1>

            <div className="mt-10 grid gap-4 md:grid-cols-3">

                <div className="rounded-xl bg-white/15 p-5 backdrop-blur">

                    <p className="text-sm text-blue-100">
                        Country
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                        {destination.country}
                    </h3>

                </div>

                <div className="rounded-xl bg-white/15 p-5 backdrop-blur">

                    <p className="text-sm text-blue-100">
                        Latitude
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                        {destination.latitude}
                    </h3>

                </div>

                <div className="rounded-xl bg-white/15 p-5 backdrop-blur">

                    <p className="text-sm text-blue-100">
                        Longitude
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                        {destination.longitude}
                    </h3>

                </div>

            </div>

        
        </section>
    );
}

export default DestinationHero;