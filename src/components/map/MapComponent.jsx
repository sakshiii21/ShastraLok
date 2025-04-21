import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Locations data
const locations = [
  { name: "Varanasi", coords: [25.3176, 82.9739], scripture: "Vedas", deity: "Shiva", period: "Ancient" },
  { name: "Ayodhya", coords: [26.7879, 82.1998], scripture: "Ramayana", deity: "Rama", period: "Epic" },
  { name: "Mathura", coords: [27.4924, 77.6737], scripture: "Mahabharata", deity: "Krishna", period: "Epic" },
  { name: "Kedarnath", coords: [30.7352, 79.0669], scripture: "Puranas", deity: "Shiva", period: "Medieval" },
];

const MapComponent = () => {
  const [filter, setFilter] = useState({ scripture: "", deity: "", period: "" });
  const [indiaGeoJson, setIndiaGeoJson] = useState(null);

  // 🛰️ Load India GeoJSON
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/datameet/maps/master/Country/india-composite.geojson")
      .then((res) => res.json())
      .then((data) => {
        setIndiaGeoJson(data); // Store GeoJSON data
      })
      .catch((err) => console.error("GeoJSON load failed", err));
  }, []);

  // Filter the locations based on selected criteria
  const filteredLocations = locations.filter(
    (loc) =>
      (filter.scripture === "" || loc.scripture === filter.scripture) &&
      (filter.deity === "" || loc.deity === filter.deity) &&
      (filter.period === "" || loc.period === filter.period)
  );

  // Custom styling for GeoJSON boundaries
  const geoJsonStyle = {
    color: "green",         // Boundary color
    weight: 2,              // Boundary thickness
    opacity: 1,             // Boundary opacity
    fillColor: "lightblue", // Fill color for areas
    fillOpacity: 0.5,       // Fill opacity
  };

  return (
    <div className="w-full">
      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <select
          className="p-2 border rounded"
          onChange={(e) => setFilter({ ...filter, scripture: e.target.value })}
        >
          <option value="">All Scriptures</option>
          <option value="Vedas">Vedas</option>
          <option value="Ramayana">Ramayana</option>
          <option value="Mahabharata">Mahabharata</option>
          <option value="Puranas">Puranas</option>
        </select>

        <select
          className="p-2 border rounded"
          onChange={(e) => setFilter({ ...filter, deity: e.target.value })}
        >
          <option value="">All Deities</option>
          <option value="Shiva">Shiva</option>
          <option value="Rama">Rama</option>
          <option value="Krishna">Krishna</option>
        </select>

        <select
          className="p-2 border rounded"
          onChange={(e) => setFilter({ ...filter, period: e.target.value })}
        >
          <option value="">All Periods</option>
          <option value="Ancient">Ancient</option>
          <option value="Epic">Epic</option>
          <option value="Medieval">Medieval</option>
        </select>
      </div>

      {/* Map */}
      <MapContainer
        center={[22, 80]} // Center the map on India
        zoom={5}
        scrollWheelZoom={true}
        className="h-[500px] w-full rounded-lg shadow-lg"
      >
        {/* Tile Layer (CartoDB or OpenStreetMap) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* GeoJSON India Boundary */}
        {indiaGeoJson && <GeoJSON data={indiaGeoJson} style={geoJsonStyle} />}

        {/* Markers for Sacred Places */}
        {filteredLocations.map((loc, index) => (
          <Marker key={index} position={loc.coords}>
            <Popup>
              <strong>{loc.name}</strong><br />
              Scripture: {loc.scripture}<br />
              Deity: {loc.deity}<br />
              Period: {loc.period}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
