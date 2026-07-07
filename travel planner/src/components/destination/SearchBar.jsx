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
            
            lg:flex-row
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
                border-slate-300
                bg-slate-50
                px-5

                py-4

                lg:px-6
                text-lg
                transition-all
                duration-300
                focus:border-blue-500
                focus:bg-white
                focus:ring-4
                focus:ring-blue-100
                outline-none
                "
            />

            <button
            className="
            primary-button
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
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