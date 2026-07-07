function EmptyState({
    title,
    message,
    icon = "📍",
}) {
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

            <div className="text-5xl">
                {icon}
            </div>

            <h3 className="mt-4 text-xl font-semibold">
                {title}
            </h3>

            <p className="mt-2 text-gray-600">
                {message}
            </p>

        </div>
    );
}

export default EmptyState;