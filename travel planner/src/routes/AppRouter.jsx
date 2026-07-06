import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import DestinationDetails from "../pages/DestinationDetails";
import NotFound from "../pages/NotFound";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/destination"
                    element={<DestinationDetails />}
                />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;