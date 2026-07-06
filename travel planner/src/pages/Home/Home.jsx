import SearchBar from "../../components/destination/SearchBar";
import DestinationGrid from "../../components/destination/DestinationGrid";

import useDestinationSearch from "../../hooks/useDestinationSearch";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Home() {
    useDocumentTitle("Home");

    const {
        destinations,
        loading,
        error,
        handleSearch,
    } = useDestinationSearch();

    return (
        <main className="mx-auto max-w-7xl px-6 py-16">

            {/* Hero */}

            <section className="text-center">

                <h1 className="text-5xl font-bold">
                    Plan Your Next Adventure
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-gray-600">

                    Search destinations around the world and
                    start planning your perfect trip.

                </p>

            </section>

            {/* Search */}

            <section className="mx-auto mt-10 max-w-3xl">

                <SearchBar

                    onSearch={handleSearch}

                    loading={loading}

                />

            </section>

            {/* Error */}

            {error && (

                <p className="mt-6 text-center text-red-600">

                    {error}

                </p>

            )}

            {/* Results */}

            <DestinationGrid

                destinations={destinations}

            />

        </main>
    );
}

export default Home;