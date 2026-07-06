import SearchBar from "../../components/destination/SearchBar";
import DestinationGrid from "../../components/destination/DestinationGrid";

import useDestinationSearch from "../../hooks/useDestinationSearch";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Home() {
  useDocumentTitle("Home");

  const { destinations, loading, error, handleSearch } = useDestinationSearch();

  return (
    <main className="page-container py-8 space-y-16">
      {/* Hero */}

    <section
        className="
        relative
        overflow-hidden
        rounded-[40px]
        bg-gradient-to-br
        from-sky-700
        via-blue-600
        to-cyan-500
        px-8
        py-28
        text-white
        shadow-2xl
        "
    >

        {/* Background Decorations */}

        <div
            className="
            absolute
            -top-24
            -left-20
            h-72
            w-72
            rounded-full
            bg-white/10
            blur-3xl
            "
        />

        <div
            className="
            absolute
            bottom-0
            right-0
            h-96
            w-96
            rounded-full
            bg-cyan-300/20
            blur-3xl
            "
        />

        <div className="relative">

            <p
                className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.35em]
                text-blue-100
                "
            >
                Your Smart Travel Companion
            </p>

            <h1
                className="
                mt-6
                max-w-4xl
                text-5xl
                font-black
                leading-tight
                md:text-7xl
                "
            >
                Discover Amazing

                <span className="block">

                    Places Around

                    <span className="text-cyan-200">

                        {" "}The World

                    </span>

                </span>

            </h1>

            <p
                className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-blue-100
                "
            >
                Search destinations, check live weather,
                estimate your budget,
                discover hotels,
                transportation,
                and famous attractions—
                all inside one application.

            </p>

        </div>

    </section>

      {/* Search */}

      <section
        className="
                relative
                z-20
                mx-auto
                -max-w-4xl
                max-w-4xl
                -translate-y-16
                rounded-[30px]
                border
                border-white/40
                bg-white/90
                p-8
                backdrop-blur-xl
                shadow-2xl
                "
      >
        <SearchBar onSearch={handleSearch} loading={loading} />
      </section>

      <section>
        <div className="mb-8">

            <p
                className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-blue-600
                "
            >
                Explore
            </p>
                {/* Results */}
                               
                <DestinationGrid destinations={destinations} />

            <h2 className="mt-2 text-4xl font-black">

                Popular Destinations

            </h2>

        </div>

        <div className="flex flex-wrap gap-4">
          {["Paris", "Tokyo", "Dubai", "London", "Rome", "Sydney"].map(
            (city) => (
              <button
                key={city}
                className="
                        rounded-full
                        border
                        bg-white
                        px-6
                        py-3
                        font-medium
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-blue-600
                        hover:bg-blue-600
                        hover:text-white
                        "
              >
                {city}
              </button>
            ),
          )}
        </div>
      </section>


      {/* Error */}

      {error && <p className="mt-6 text-center text-red-600">{error}</p>}

    <section>
        <div className="mb-8">

            <p
                className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-blue-600
                "
            >
                Features
            </p>

            <h2 className="mt-2 text-4xl font-black">
                Everything You Need
            </h2>

        </div>

        <div
            className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-3
            "
        >
            {[
                {
                    icon: "🌤️",
                    title: "Weather",
                    text: "Real-time weather forecasts.",
                },
                {
                    icon: "🏨",
                    title: "Hotels",
                    text: "Find nearby accommodations.",
                },
                {
                    icon: "💰",
                    title: "Budget",
                    text: "Estimate your trip expenses.",
                },
                {
                    icon: "📍",
                    title: "Attractions",
                    text: "Discover famous places nearby.",
                },
                {
                    icon: "🚌",
                    
                    title: "Transportation",
                    text: "Explore travel options.",
                },
                {
                    icon: "🗺️",
                    title: "Interactive Map",
                    text: "Visualize every destination.",
                },
            ].map((feature) => (
                <article
                    key={feature.title}
                    className="
                        group
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-8
                        shadow-lg
                        transition-all
                        duration-300
                        hover:-translate-y-3
                        hover:border-blue-200
                        hover:shadow-2xl
                    "
                >
                    <div
                        className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-blue-50
                            text-3xl
                            transition-all
                            duration-300
                            group-hover:scale-110
                            group-hover:bg-gradient-to-r
                            group-hover:from-blue-600
                            group-hover:to-cyan-500
                        "
                    >
                        {feature.icon}
                    </div>

                    <h3
                        className="
                            mt-6
                            text-xl
                            font-bold
                            text-slate-800
                            transition-colors
                            group-hover:text-blue-600
                        "
                    >
                        {feature.title}
                    </h3>

                    <div
                        className="
                            mt-3
                            h-1
                            w-14
                            rounded-full
                            bg-gradient-to-r
                            from-blue-600
                            to-cyan-400
                        "
                    />

                    <p
                        className="
                            mt-4
                            leading-7
                            text-slate-500
                        "
                    >
                        {feature.text}
                    </p>
                </article>
            ))}
        </div>
    </section>

    </main>
  );
}

export default Home;
