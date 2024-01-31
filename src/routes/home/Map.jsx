import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { sitesCoords } from "../../lib/coords";
import { Icon } from "leaflet";
import icon from "../../assets/mapIcon.png";
const Map = () => {
  const kampala = [-0.060958, 32.77115];
  const mapIcon = new Icon({
    iconUrl: icon,
    iconSize: [38, 38],
  });
  return (
    <div>
      <MapContainer center={kampala} zoom={9}>
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {sitesCoords.map((site) => (
          <Marker position={site.geo} key={site.name} icon={mapIcon}></Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
