function WeatherItem({ label, value }) {
    return (
        <div className="flex items-center justify-between border-b border-gray-200 py-3">
            <span className="font-medium text-gray-600">
                {label}
            </span>

            <span className="font-semibold text-gray-900">
                {value}
            </span>
        </div>
    );
}

export default WeatherItem;