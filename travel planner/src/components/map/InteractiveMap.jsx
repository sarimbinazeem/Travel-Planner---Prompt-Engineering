import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from "react-leaflet";

function InteractiveMap({
    latitude,
    longitude,
    city,
}) {
    return (

        <div
            className="
            overflow-hidden
            rounded-3xl
            shadow-xl
            "
            >
        <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            scrollWheelZoom={false}
            className="
                h-[500px]
                rounded-3xl
                border
                border-slate-200
                shadow-xl
                overflow-hidden
                "
        >

            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[latitude, longitude]}>

                <Popup>

                    {city}

                </Popup>

            </Marker>

        </MapContainer>

        </div>
    );
}

export default InteractiveMap;