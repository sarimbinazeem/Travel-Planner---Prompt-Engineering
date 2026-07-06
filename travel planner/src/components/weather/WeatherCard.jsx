import WeatherItem from "./WeatherItem";

function WeatherCard({ weather }) {
    const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    return (
        <section className="rounded-2xl border bg-white p-8 shadow">

            <h2 className="mb-6 text-2xl font-bold">
                Current Weather
            </h2>

            <div className="flex items-center justify-between">

                <div>

                    <h3 className="text-5xl font-bold">
                        {weather.temperature}°C
                    </h3>

                    <p className="mt-2 text-lg capitalize text-gray-600">
                        {weather.description}
                    </p>

                </div>

                <img
                    src={iconUrl}
                    alt={weather.description}
                    className="h-24 w-24"
                />

            </div>

            <div className="mt-8">

                <WeatherItem
                    label="Feels Like"
                    value={`${weather.feelsLike}°C`}
                />

                <WeatherItem
                    label="Humidity"
                    value={`${weather.humidity}%`}
                />

                <WeatherItem
                    label="Wind Speed"
                    value={`${weather.windSpeed} m/s`}
                />

                <WeatherItem
                    label="Pressure"
                    value={`${weather.pressure} hPa`}
                />

            </div>

        </section>
    );
}

export default WeatherCard;