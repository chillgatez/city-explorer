import React from 'react';
import Card from 'react-bootstrap/Card';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon,
    iconUrl: markerIcon,
    shadowUrl: markerIconShadow,
});

function Map(props) {
    return (
        <Card>
            {props.city.lat && props.city.lon ? (
                <MapContainer

                    center={[props.city.lat, props.city.lon]}
                    zoom={12}
                    style={{ display: props.img_url, height: "400px", width: "550x" }} scrollWheelZoom={false}>

                    <TileLayer
                        url='https://{s}-tiles.locationiq.com/v3/streets/r/{z}/{x}/{y}.png?pk.10e8ec4cc55149fb4eabca0693b41639'
                        attribution='&copy; <a href="https://www.locationiq.com/">LocationIQ</a> contributors' />

                    <Marker
                        position={[props.city.lat, props.city.lon]}
                    >
                        <Popup>{props.city.display_name}</Popup>
                    </Marker>


                </MapContainer>
            ) : null}

            <Card.Body>
                <Card.Title>{props.city.display_name}</Card.Title>
                <Card.Text>
                    Located at the coordinates of {props.city.lat}, {props.city.lon}.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Map;
