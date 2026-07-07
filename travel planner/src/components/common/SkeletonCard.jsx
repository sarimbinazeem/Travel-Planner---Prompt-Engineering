function SkeletonCard() {
    return (
        <div className="
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
        ">

            <div className="h-6 w-2/3 rounded bg-gray-300" />

            <div className="mt-4 h-4 rounded bg-gray-200" />

            <div className="mt-2 h-4 w-3/4 rounded bg-gray-200" />

            <div className="mt-6 h-4 w-1/3 rounded bg-gray-300" />

        </div>
    );
}

export default SkeletonCard;