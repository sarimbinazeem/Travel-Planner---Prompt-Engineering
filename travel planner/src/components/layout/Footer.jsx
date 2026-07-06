function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-auto">
            <div className="container mx-auto text-center">
                <p>
                    © {new Date().getFullYear()} Travel Planner.
                    All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;