export function formatWeather(data) {
    return {
        temperature: Math.round(data.main.temp),

        feelsLike: Math.round(data.main.feels_like),

        humidity: data.main.humidity,

        pressure: data.main.pressure,

        windSpeed: data.wind.speed,

        description: data.weather[0].description,

        icon: data.weather[0].icon,

        city: data.name,
    };
}