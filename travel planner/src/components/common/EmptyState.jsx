function EmptyState({
    title,
    message,
    icon = "📍",
}) {
    return (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">

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