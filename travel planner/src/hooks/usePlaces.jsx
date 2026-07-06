import { useEffect, useState } from "react";

import {
    getHotels,
    getTouristAttractions,
    getTransportation,
} from "../services/placesService";

function usePlaces(latitude, longitude) {
    const [hotels, setHotels] = useState([]);
    const [attractions, setAttractions] = useState([]);
    const [transportation, setTransportation] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {
        if (!latitude || !longitude) return;

        async function loadPlaces() {
            try {
                setLoading(true);
                setError("");

                const [
                    hotelData,
                    attractionData,
                    transportData,
                ] = await Promise.all([
                    getHotels(latitude, longitude),
                    getTouristAttractions(latitude, longitude),
                    getTransportation(latitude, longitude),
                ]);

                setHotels(hotelData);
                setAttractions(attractionData);
                setTransportation(transportData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadPlaces();
    }, [latitude, longitude]);

    return {
        hotels,
        attractions,
        transportation,
        loading,
        error,
    };
}

export default usePlaces;