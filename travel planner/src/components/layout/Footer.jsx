function Footer() {
    return (
        <footer
            className="
            border-t
            border-slate-200
            bg-white/70
            backdrop-blur
            "
        
        >

        <div
        className="
        page-container
        py-10
        flex
        flex-col
        gap-3
        md:flex-row
        justify-between
        items-center
        "
        >

        <div>

        <h3 className="font-black text-xl">

        🌍 Travel Planner

        </h3>

        <p>

        Plan smarter. Travel better.

        </p>

        </div>

        <p>

        © 2026 Travel Planner • Built with React + Tailwind CSS

        </p>

        </div>

        </footer>
    );
}

export default Footer;