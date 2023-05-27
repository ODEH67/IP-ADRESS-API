
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import '../App.css';
import L from 'leaflet';
import marker from '../images/marker1.gif';


export default function Map({lngi,lati}) {

    const position = [lati,lngi];
// console.log(position);

    const myIcon = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        popupAnchor:  [-0, -0],
        iconSize: [62,62],
    
    });
    return (
    <MapContainer  center={position} zoom={16} scrollWheelZoom={false}>
    <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker  icon={myIcon} position={position}>
        <Popup>
            your are here <br /> {position}
        </Popup>
    </Marker>
    </MapContainer>
    );
}
