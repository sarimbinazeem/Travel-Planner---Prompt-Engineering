import WeatherItem from "./WeatherItem";

const weatherIcons = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Fog: "🌫️",
};



function WeatherCard({ weather }) {

    
    const weatherIcon =weatherIcons[weather.main] || "🌤️";

    return (
        <section
            className="
                rounded-2xl
                border
                bg-white
                p-8
                shadow
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >
            <div className="text-center">

                <div className="text-7xl">
                    {weatherIcon}
                </div>

                <h2 className="mt-4 text-6xl font-black text-slate-800">
                    {Math.round(weather.temperature)}°C
                </h2>

                <p className="mt-2 text-lg text-gray-500">
                    Feels like {Math.round(weather.feelsLike)}°C
                </p>

                <p className="mt-2 text-xl font-semibold">
                    {weather.description.charAt(0).toUpperCase() +
                    weather.description.slice(1)}
                </p>

            </div>

            <div className="mt-8 grid
                            gap-6
                            sm:grid-cols-2
                            xl:grid-cols-3">

                <div
                    className="
                        rounded-2xl
                        bg-slate-100
                        p-5
                        text-center
                    "
                >

                    <p className="text-gray-500">
                        💧 Humidity
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                        {weather.humidity}%
                    </h3>

                </div>

                <div
                    className="
                        rounded-2xl
                        bg-slate-100
                        p-5
                        text-center
                    "
                >

                    <p className="text-gray-500">
                        💨 Wind
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                        {weather.windSpeed} km/h
                    </h3>

                </div>

            </div>
        </section>
    );
}

export default WeatherCard;