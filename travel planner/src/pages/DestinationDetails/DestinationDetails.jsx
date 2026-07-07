import { Link, useLocation } from "react-router-dom";

import useDocumentTitle from "../../hooks/useDocumentTitle";

import useWeather from "../../hooks/useWeather";
import usePlaces from "../../hooks/usePlaces";

import DestinationHero from "../../components/destination/DestinationHero";
import DestinationInfo from "../../components/destination/DestinationInfo";

import WeatherCard from "../../components/weather/WeatherCard";
import WeatherLoading from "../../components/weather/WeatherLoading";

import InteractiveMap from "../../components/map/InteractiveMap";

import PlacesSection from "../../components/places/PlacesSection";

import BudgetCard from "../../components/budget/BudgetCard";

import SkeletonCard from "../../components/common/SkeletonCard";
import ErrorCard from "../../components/common/ErrorCard";

import { estimateBudget } from "../../utils/budgetEstimator";

function DestinationDetails() {

    const { state } = useLocation();

    const destination = state?.destination;

    useDocumentTitle(destination?.city || "Destination");

    if (!destination) {

        return (

            <main className="page-container py-12">

                <div className="rounded-3xl border bg-white p-10 text-center shadow">

                    <h1 className="text-4xl font-black text-red-600">

                        Destination Not Found

                    </h1>

                    <p className="mt-5">

                        Please search for a destination again.

                    </p>

                    <Link
                        to="/"
                        className="
                            mt-8
                            inline-block
                            rounded-xl
                            bg-blue-600
                            px-6
                            py-3
                            font-semibold
                            text-white
                            hover:bg-blue-700
                        "
                    >
                        Back Home
                    </Link>

                </div>

            </main>

        );

    }

    const {

        weather,
        loading,
        error,

    } = useWeather(

        destination.latitude,
        destination.longitude

    );

    const {

        hotels,
        attractions,
        transportation,
        loading: placesLoading,
        error: placesError,

    } = usePlaces(

        destination.latitude,
        destination.longitude

    );

    const budget = estimateBudget();

    return (

        <main className="page-container space-y-12 py-10">

            <DestinationHero destination={destination} />

            {/* Info + Weather */}

            <section
                className="
                    grid
                    gap-8
                    lg:grid-cols-2
                "
            >

                <DestinationInfo destination={destination} />

                {loading && <WeatherLoading />}

                {!loading && error && (

                    <ErrorCard message={error} />

                )}

                {!loading && weather && (

                    <WeatherCard weather={weather} />

                )}

            </section>

            {/* Map */}

            <section>

                <InteractiveMap

                    latitude={destination.latitude}
                    longitude={destination.longitude}
                    city={destination.city}

                />

            </section>

            {/* Hotels */}

            <section>

                {placesLoading ? (

                    <div className="grid gap-6 md:grid-cols-2">

                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />

                    </div>

                ) : placesError ? (

                    <ErrorCard message={placesError} />

                ) : (

                    <PlacesSection

                        title="🏨 Nearby Hotels"
                        places={hotels}

                    />

                )}

            </section>

            {/* Attractions */}

            <section>

                {!placesLoading && !placesError && (

                    <PlacesSection

                        title="📍 Tourist Attractions"
                        places={attractions}

                    />

                )}

            </section>

            {/* Transportation */}

            <section>

                {!placesLoading && !placesError && (

                    <PlacesSection

                        title="🚌 Transportation"
                        places={transportation}

                    />

                )}

            </section>

            {/* Budget */}

            <section>

                <BudgetCard budget={budget} />

            </section>

        </main>

    );

}

export default DestinationDetails;