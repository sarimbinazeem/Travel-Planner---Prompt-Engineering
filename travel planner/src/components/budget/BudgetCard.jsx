function BudgetCard({ budget }) {
    return (
        <section className="rounded-2xl border bg-white p-8 shadow">

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

                <hr />

                <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${budget.total}</span>
                </div>

            </div>

        </section>
    );
}

export default BudgetCard;