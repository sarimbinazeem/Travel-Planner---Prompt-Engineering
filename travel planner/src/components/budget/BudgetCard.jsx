function BudgetCard({ budget }) {
    return (
        <section
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
                hover-card
            "
        >

            <h2
                className="
                    mb-8
                    text-3xl
                    font-black
                    text-slate-800
                "
            >
                Estimated Budget
            </h2>

            <div className="space-y-4">

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        bg-slate-50
                        px-5
                        py-4
                    "
                >
                    <span>🏨 Hotel</span>
                    <span>${budget.hotel}</span>
                </div>

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        bg-slate-50
                        px-5
                        py-4
                    "
                >
                    <span>🍽 Food</span>
                    <span>${budget.food}</span>
                </div>

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        bg-slate-50
                        px-5
                        py-4
                    "
                >
                    <span>🚌 Transportation</span>
                    <span>${budget.transport}</span>
                </div>

                <div
                    className="
                        my-5
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-slate-300
                        to-transparent
                    "
                />

                <div
                    className="
                        flex
                        justify-between
                        text-2xl
                        font-black
                        text-emerald-600
                    "
                >
                    <span>Total</span>

                    <span className="font-semibold text-emerald-600">
                        ${budget.total}
                    </span>
                </div>

            </div>

        </section>
    );
}

export default BudgetCard;