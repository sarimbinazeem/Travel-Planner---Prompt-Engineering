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
            <h2 className="mb-8 text-3xl font-black text-slate-800">
                Destination Information
            </h2>

            <div className="grid gap-5">

            {[
                ["Country", destination.country],
                ["State", destination.state || "N/A"],
                ["Latitude", destination.latitude],
                ["Longitude", destination.longitude],
                ["Address", destination.formatted],
            ].map(([label, value]) => (
                <div
                    key={label}
                    className="
                        flex
                        items-start
                        justify-between
                        rounded-2xl
                        bg-slate-50
                        p-4
                    "
                >
                    <span className="font-semibold text-slate-600">
                        {label}
                    </span>

                    <span className="max-w-[60%] text-right font-medium">
                        {value}
                    </span>
                </div>
            ))}

        </div>
        </section>
    );
}

export default DestinationInfo;