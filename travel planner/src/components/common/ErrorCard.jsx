function ErrorCard({ message }) {
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

            <h3 className="font-bold text-red-600">
                Unable to load data
            </h3>

            <p className="mt-2 text-red-500">
                {message}
            </p>

        </div>
    );
}

export default ErrorCard;