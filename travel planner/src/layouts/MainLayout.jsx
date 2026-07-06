import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;