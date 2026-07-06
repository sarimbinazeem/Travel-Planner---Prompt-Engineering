function SkeletonCard() {
    return (
        <div className="animate-pulse rounded-xl border bg-white p-5 shadow">

            <div className="h-6 w-2/3 rounded bg-gray-300" />

            <div className="mt-4 h-4 rounded bg-gray-200" />

            <div className="mt-2 h-4 w-3/4 rounded bg-gray-200" />

            <div className="mt-6 h-4 w-1/3 rounded bg-gray-300" />

        </div>
    );
}

export default SkeletonCard;