"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect } from "react";

interface MapProps {
  center: LatLngExpression;
  zoom: number;
  markerText?: string;
  height?: string;
}

function MapFixer() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize(); // Fix layout
    }, 200); // small delay ensures layout is done
  }, [map]);

  return null;
}

export default function Map({
  center,
  zoom,
  markerText,
  height = "400px",
}: MapProps) {
  return (
    <div
      style={{
        height,
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        boxShadow: "0 0 10px 3px rgba(230, 184, 33, 0.5)",
      }}
      className="rounded-lg overflow-hidden"
    >
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <MapFixer />
        <TileLayer
          url={`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env.NEXT_PUBLIC_STADIA_API_KEY}`}
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        />
        <Marker position={center}>
          {markerText && <Popup>{markerText}</Popup>}
        </Marker>
      </MapContainer>
    </div>
  );
}
