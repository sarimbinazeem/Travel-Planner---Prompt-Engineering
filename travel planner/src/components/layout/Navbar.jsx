import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between px-4 py-4">
                <NavLink
                    to="/"
                    className="text-2xl font-bold tracking-wide"
                >
                    Travel Planner
                </NavLink>

                <div className="flex items-center gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-200 font-semibold"
                                : "hover:text-blue-200 transition-colors"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/destination"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-200 font-semibold"
                                : "hover:text-blue-200 transition-colors"
                        }
                    >
                        Destination
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;