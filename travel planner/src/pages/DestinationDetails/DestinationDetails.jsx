import { useLocation, Link } from "react-router-dom";

import useDocumentTitle from "../../hooks/useDocumentTitle";

import useWeather from "../../hooks/useWeather";

import WeatherCard from "../../components/weather/WeatherCard";
import WeatherLoading from "../../components/weather/WeatherLoading";

import DestinationHero from "../../components/destination/DestinationHero";
import DestinationInfo from "../../components/destination/DestinationInfo";
import MapPlaceholder from "../../components/destination/MapPlaceholder";

import usePlaces from "../../hooks/usePlaces";

import PlacesSection from "../../components/places/PlacesSection";

import BudgetCard from "../../components/budget/BudgetCard";

import { estimateBudget } from "../../utils/budgetEstimator";

import InteractiveMap from "../../components/map/InteractiveMap";

import SkeletonCard from "../../components/common/SkeletonCard";
import ErrorCard from "../../components/common/ErrorCard";





function DestinationDetails() {

    const { state } = useLocation();

    const destination = state?.destination;

    const {
        weather,
        loading,
        error,
    } = useWeather(
        destination?.latitude,
        destination?.longitude
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


    useDocumentTitle(destination?.city || "Destination");

    if (!destination) {

        return (

            <main className="mx-auto max-w-5xl px-6 py-16">

                <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center">

                    <h2 className="text-3xl font-bold text-red-600">

                        Destination Not Found

                    </h2>

                    <p className="mt-4 text-gray-600">

                        Please return to the search page and select a destination again.

                    </p>

                    <Link
                        to="/"
                        className="
                            mt-6
                            inline-block
                            rounded-lg
                            bg-blue-600
                            px-6
                            py-3
                            text-white
                            hover:bg-blue-700
                        "
                    >
                        Back to Home
                    </Link>

                </div>

            </main>

        );

    }

    return (

        <main className="mx-auto max-w-7xl px-6 py-12">

            <DestinationHero destination={destination} />

            <section className="mt-10 grid gap-8 lg:grid-cols-2">

                <DestinationInfo destination={destination} />

                <InteractiveMap
                    latitude={destination.latitude}
                    longitude={destination.longitude}
                    city={destination.city}
                />

            </section>

            <section className="mt-10 rounded-2xl border bg-white p-8 shadow">

                <h2 className="mb-6 text-2xl font-bold">

                   <section className="mt-10">

                        {loading && <WeatherLoading />}

                        {!loading && error && (

                            <div className="rounded-xl border border-red-200 bg-red-50 p-6">

                                <p className="text-red-600">
                                    <ErrorCard message={error} />
                                </p>

                            </div>

                        )}

                        {!loading && weather && (

                            <WeatherCard weather={weather} />

                        )}

                    </section>

                </h2>

                {placesLoading && (
                    <section className="mt-10 grid gap-4 md:grid-cols-2">

                        <SkeletonCard />

                        <SkeletonCard />

                        <SkeletonCard />

                        <SkeletonCard />

                    </section>
                )}

                {placesError && (
                    <section className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-8">
                        <p className="text-red-600">
                            <ErrorCard message={placesError} />
                        </p>
                    </section>
                )}

                {!placesLoading && !placesError && (
                    <>
                        <div className="mt-10">
                            <PlacesSection
                                title="🏨 Nearby Hotels"
                                places={hotels}
                            />
                        </div>

                        <div className="mt-10">
                            <PlacesSection
                                title="📍 Tourist Attractions"
                                places={attractions}
                            />
                        </div>

                        <div className="mt-10">
                            <PlacesSection
                                title="🚌 Transportation"
                                places={transportation}
                            />
                        </div>
                    </>
                )}

                <div className="mt-10">
                    <BudgetCard budget={budget} />
                </div>

                const budget = estimateBudget();

                <div className="grid gap-4 md:grid-cols-2">

                    <div className="rounded-lg border p-4">

                        🌤 Weather

                    </div>

                    <div className="rounded-lg border p-4">

                        🏨 Hotels

                    </div>

                    <div className="rounded-lg border p-4">

                        🚆 Transportation

                    </div>

                    <div className="rounded-lg border p-4">

                        💰 Budget Estimation

                    </div>

                    <div className="rounded-lg border p-4">

                        📍 Tourist Attractions

                    </div>

                </div>

            </section>

        </main>

    );

}

export default DestinationDetails;