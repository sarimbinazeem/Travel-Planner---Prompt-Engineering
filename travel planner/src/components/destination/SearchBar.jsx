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
            className="flex flex-col gap-4 md:flex-row"
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
                    rounded-lg
                    border
                    border-gray-300
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-500
                "
            />

            <button
                type="submit"
                disabled={loading}
                className="
                    rounded-lg
                    bg-blue-600
                    px-6
                    py-3
                    text-white
                    transition
                    hover:bg-blue-700
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                "
            >
                {loading ? "Searching..." : "Search"}
            </button>
        </form>
    );
}

export default SearchBar;