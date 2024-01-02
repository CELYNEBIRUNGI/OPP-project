import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { sitesCoords } from "../../lib/coords";
const Map = () => {
  const kampala = [-0.060958, 32.77115];
  return (
    <div>
      <MapContainer center={kampala} zoom={9}>
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sitesCoords.map((site) => (
          <Marker position={site.geo} key={site.name}></Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
