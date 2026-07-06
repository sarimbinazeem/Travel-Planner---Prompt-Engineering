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
        <MapContainer
            center={[latitude, longitude]}
            zoom={12}
            scrollWheelZoom={false}
            className="h-[450px] w-full rounded-3xl"
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
    );
}

export default InteractiveMap;