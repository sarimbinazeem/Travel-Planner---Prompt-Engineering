import { useState } from "react";

function SearchBar({ onSearch, loading }) {
    const [searchText, setSearchText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        onSearch(searchText);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="
            flex
            flex-col
            gap-4
            rounded-[28px]
            border
            border-slate-200
            bg-white
            p-5
            shadow-xl
            md:flex-row
            "
        >
            <input
                type="text"
                placeholder="Search a destination..."
                value={searchText}
                onChange={(event) =>
                    setSearchText(event.target.value)
                }
                className="
                flex-1
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-6
                py-4
                text-lg
                outline-none
                transition-all
                duration-300
                focus:border-blue-500
                focus:bg-white
                focus:ring-4
                focus:ring-blue-100
                "
            />

            <button
                className="
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-2xl
                active:scale-95
                "
               >
                {loading ? "Searching..." : "Search"}
            </button>
        </form>
    );
}

export default SearchBar;