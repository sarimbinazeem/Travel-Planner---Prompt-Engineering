import { useState } from "react";

import { searchDestinations } from "../services/geoapifyService";
import { formatDestination } from "../utils/formatDestination";

function useDestinationSearch() {
    const [destinations, setDestinations] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    async function handleSearch(searchText) {
        try {
            setLoading(true);

            setError("");

            const results = await searchDestinations(searchText);

            setDestinations(formatDestination(results));
        } catch (err) {
            setError(err.message);
            setDestinations([]);
        } finally {
            setLoading(false);
        }
    }

    return {
        destinations,
        loading,
        error,
        handleSearch,
    };
}

export default useDestinationSearch;