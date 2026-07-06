import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
    return (
        <article
            className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >
            <div className="space-y-2">

                <h2 className="text-2xl font-bold">
                    📍 {destination.city}
                </h2>

                <p className="text-lg text-gray-700">
                    🌍 {destination.country}
                </p>

                <p className="text-sm text-gray-500">
                    {destination.formatted}
                </p>

            </div>
            <Link
                to={`/destination/${destination.id}`}
                state={{ destination }}
                className="
                    mt-6
                    inline-flex
                    items-center
                    rounded-lg
                    bg-blue-600
                    px-5
                    py-2.5
                    font-medium
                    text-white
                    transition
                    hover:bg-blue-700
                "
            >
                View Details →
            </Link>
        </article>
    );
}

export default DestinationCard;