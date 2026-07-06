import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <App />
        </div>
        </StrictMode>
);