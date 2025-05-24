"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

interface MapProps {
  center: LatLngExpression;
  zoom: number;
  markerText?: string;
  height?: string;
}

export default function Map({
  center,
  zoom,
  markerText,
  height = "400px",
}: MapProps) {

  return (
    <div style={{ height, width: "100%", maxWidth: "900px", margin: "0 auto", boxShadow: "0 0 10px 3px rgba(230, 184, 33, 0.5)"}}
    className="rounded-lg overflow-hidden"
    >
  <MapContainer
    center={center}
    zoom={zoom}
    scrollWheelZoom={false}
    style={{ height: "100%", width: "100%" }}
  >
<TileLayer
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
/>
    <Marker position={center}>
          {markerText && <Popup>{markerText}</Popup>}
        </Marker>
  </MapContainer>
</div>

  );
}
