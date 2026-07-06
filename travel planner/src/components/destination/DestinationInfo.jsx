function DestinationInfo({ destination }) {
    return (
        <section
            className="
                rounded-2xl
                border
                bg-white
                p-8
                shadow
            "
        >
            <h2 className="mb-6 text-2xl font-bold">
                Destination Information
            </h2>

            <div className="space-y-4">

                <p>
                    <strong>Country:</strong>{" "}
                    {destination.country}
                </p>

                <p>
                    <strong>State:</strong>{" "}
                    {destination.state || "N/A"}
                </p>

                <p>
                    <strong>Latitude:</strong>{" "}
                    {destination.latitude}
                </p>

                <p>
                    <strong>Longitude:</strong>{" "}
                    {destination.longitude}
                </p>

                <p>
                    <strong>Address:</strong>{" "}
                    {destination.formatted}
                </p>

            </div>
        </section>
    );
}

export default DestinationInfo;