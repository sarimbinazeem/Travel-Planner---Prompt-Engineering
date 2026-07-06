import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header
            className="
            sticky
            top-0
            z-50
            border-b
            border-slate-200/70
            bg-white/80
            backdrop-blur-xl
            shadow-sm
            "
        >

            <nav
                className="
                page-container
                flex
                h-20
                items-center
                justify-between
                "
            >

                {/* Logo */}

                <div className="flex items-center gap-3">

                    <div
                        className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-600
                        to-cyan-500
                        text-2xl
                        text-white
                        shadow-lg
                        "
                    >

                        ✈️

                    </div>

                    <NavLink
                        to="/"
                        className="leading-tight"
                    >

                        <h2 className="text-xl font-bold text-slate-900">

                            Travel Planner

                        </h2>

                        <p className="text-xs text-slate-500">

                            Explore Smarter

                        </p>

                    </NavLink>

                </div>

                {/* Navigation */}

                <div className="flex items-center gap-3">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `
                            rounded-xl
                            px-4
                            py-2
                            font-medium
                            transition-all
                            ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                            }
                            `
                        }
                    >

                        Home

                    </NavLink>

                    <NavLink
                        to="/destination"
                        className={({ isActive }) =>
                            `
                            rounded-xl
                            px-4
                            py-2
                            font-medium
                            transition-all
                            ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                            }
                            `
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