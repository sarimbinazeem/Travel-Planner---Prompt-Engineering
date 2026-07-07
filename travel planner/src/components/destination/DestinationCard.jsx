import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
    return (
        <article
            className="
            group
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-7
            shadow-sm
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-blue-500
            hover:shadow-2xl
            hover-card
            "
        >
            <div
                className="
                    mb-6
                    h-52
                    overflow-hidden
                    rounded-2xl
                "
            >

                <img
                    src={`https://picsum.photos/seed/${destination.city}/600/400`}
                    alt={destination.city}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                    "
                />

            </div>
            
            <div className="space-y-2">
                <div
                    className="
                        mb-6
                        inline-flex
                        rounded-full
                        bg-blue-100
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-blue-700
                    "
                >
                    Trending Destination

                </div>
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