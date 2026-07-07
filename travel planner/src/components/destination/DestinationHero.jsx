function DestinationHero({ destination }) {
  return (
    <section
      className="
            relative
            overflow-hidden
            rounded-[40px]
            "
    >
      <img
        src={`https://picsum.photos/seed/${destination.city}/1600/600`}
        alt={destination.city}
        className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                    "
      />

      <div
        className="
                absolute
                inset-0
                bg-gradient-to-r
                from-slate-900/70
                via-blue-900/40
                to-cyan-800/30
                "
      />

      <div className="relative p-10 text-white">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative">
          <div
            className="
                        absolute
                        right-0
                        top-0
                        h-72
                        w-72
                        rounded-full
                        bg-white/10
                        blur-3xl
                    "
          />

          <p className="uppercase tracking-[0.3em] text-blue-100 text-sm font-semibold">
            Explore
          </p>

          <h1 className="mt-5 text-6xl font-black">{destination.city}</h1>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">
              <p className="text-blue-100 text-sm">Country</p>
              <h3 className="mt-3 text-2xl font-bold">{destination.country}</h3>
            </div>

            <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">
              <p className="text-blue-100 text-sm">Latitude</p>
              <h3 className="mt-3 text-xl font-bold">{destination.latitude}</h3>
            </div>

            <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">
              <p className="text-blue-100 text-sm">Longitude</p>
              <h3 className="mt-3 text-xl font-bold">
                {destination.longitude}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationHero;
