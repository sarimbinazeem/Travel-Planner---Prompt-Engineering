import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
    return (
        <article
            className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
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
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-5
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                "
                
            >
                View Details →
            </Link>
        </article>
    );
}

export default DestinationCard;