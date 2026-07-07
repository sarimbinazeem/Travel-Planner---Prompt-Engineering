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
                

                <div className="flex items-center gap-3">

                <span className="text-3xl">

                🌍

                </span>

                <div>

                <h1 className="text-2xl font-black">

                Travel Planner

                </h1>

                <p className="text-xs text-slate-500">

                Explore Smarter

                </p>

                </div>

                </div>

                </NavLink>

                <div className="flex items-center gap-3">

                    <NavLink
                        to="/"
                            className={({ isActive }) =>

                            `
                            relative
                            px-4
                            py-2
                            rounded-xl
                            font-medium
                            transition-all
                            duration-300

                            ${isActive

                            ?

                            "bg-blue-600 text-white shadow"

                            :

                            "text-slate-600 hover:bg-slate-100"

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
                        relative
                        px-4
                        py-2
                        rounded-xl
                        font-medium
                        transition-all
                        duration-300

                        ${isActive

                        ?

                        "bg-blue-600 text-white shadow"

                        :

                        "text-slate-600 hover:bg-slate-100"

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