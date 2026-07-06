import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ui/ScrollToTop";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import DestinationDetails from "../pages/DestinationDetails";
import NotFound from "../pages/NotFound";

function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />

                    <Route
                        path="/destination/:placeId"
                        element={<DestinationDetails />}
                    />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;