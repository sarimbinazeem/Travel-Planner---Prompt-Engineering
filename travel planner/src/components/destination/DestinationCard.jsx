import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
    return (
        <article
            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
            "
        >
            <div className="space-y-2">

                <h2 className="card-title">
                    📍 {destination.city}
                </h2>

                <p className="text-lg font-medium text-slate-700">
                    🌍 {destination.country}
                </p>

                <p className="card-text text-sm">
                    {destination.formatted}
                </p>

            </div>
            <Link
                to={`/destination/${destination.id}`}
                state={{ destination }}
                className="
                primary-button
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-6
                py-3
                font-semibold
                text-white
                shadow-lg
                hover:shadow-2xl
                "
                
            >
                View Details →
            </Link>
        </article>
    );
}

export default DestinationCard;