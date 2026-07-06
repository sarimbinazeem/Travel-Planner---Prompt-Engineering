import { useEffect, useState } from "react";

import { getCurrentWeather } from "../services/weatherService";
import { formatWeather } from "../utils/formatWeather";

function useWeather(latitude, longitude) {
    const [weather, setWeather] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchWeather() {
            if (!latitude || !longitude) return;

            try {
                setLoading(true);

                setError("");

                const response = await getCurrentWeather(
                    latitude,
                    longitude
                );

                setWeather(formatWeather(response));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
    }, [latitude, longitude]);

    return {
        weather,
        loading,
        error,
    };
}

export default useWeather;