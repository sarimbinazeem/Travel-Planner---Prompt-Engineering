function DestinationCard({ destination }) {
    return (
        <div
            className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
            "
        >
            <h2 className="text-xl font-bold">
                {destination.city}
            </h2>

            <p className="text-gray-600">
                {destination.country}
            </p>

            <p className="mt-3 text-sm text-gray-500">
                {destination.formatted}
            </p>
        </div>
    );
}

export default DestinationCard;