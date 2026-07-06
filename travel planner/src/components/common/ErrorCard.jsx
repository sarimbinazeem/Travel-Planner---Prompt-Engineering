function ErrorCard({ message }) {
    return (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">

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