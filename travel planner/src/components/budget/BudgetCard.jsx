function BudgetCard({ budget }) {
    return (
        <section
            className="
                rounded-2xl
                border
                bg-white
                p-8
                shadow
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            <h2 className="mb-6 text-2xl font-bold">
                Estimated Budget
            </h2>

            <div className="space-y-4">

                <div className="flex justify-between">
                    <span>🏨 Hotel</span>
                    <span>${budget.hotel}</span>
                </div>

                <div className="flex justify-between">
                    <span>🍽 Food</span>
                    <span>${budget.food}</span>
                </div>

                <div className="flex justify-between">
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

                <div className="flex justify-between text-2xl font-bold text-emerald-600">
                    <span>Total</span>
                    <span>${budget.total}</span>
                </div>

            </div>

        </section>
    );
}

export default BudgetCard;