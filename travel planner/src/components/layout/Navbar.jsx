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

                <NavLink
                    to="/"
                    className="
                        text-3xl
                        font-black
                        tracking-tight
                        text-sky-600
                        transition
                        hover:scale-105
                    "
                >
                

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
                        text-xl
                        text-white
                        shadow-lg
                        "
                    >
                        ✈️
                    </div>

                    <div>

                        <h2 className="text-xl font-bold text-slate-900">

                            Travel Planner

                        </h2>

                        <p className="text-sm text-slate-500">

                            Explore Smarter

                        </p>

                    </div>

                </NavLink>

                <div className="flex items-center gap-3">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>

                            `
                            rounded-full
                            px-5
                            py-2
                            transition-all
                            duration-300
                            ${isActive
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-slate-700 hover:bg-slate-100"}
                            `
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/destination"
                        className={({ isActive }) =>

                            `
                            rounded-full
                            px-5
                            py-2
                            transition-all
                            duration-300
                            ${isActive
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-slate-700 hover:bg-slate-100"}
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