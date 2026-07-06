import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-wide"
                >
                    Travel Planner
                </Link>

                <div className="flex items-center gap-6">
                    <Link
                        to="/"
                        className="hover:text-blue-200 transition-colors"
                    >
                        Home
                    </Link>

                    <Link
                        to="/destination"
                        className="hover:text-blue-200 transition-colors"
                    >
                        Destination
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;