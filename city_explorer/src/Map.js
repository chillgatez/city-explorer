import React from 'react';
import Card from 'react-bootstrap/Card'

function Map(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.city}</Card.Title>
                <Card.Img variant="top" alt={props.city} src={props.img_url} />
                <Card.Text>
                    Located at the coordinates of {props.city.lat}, {props.city.lon}. You're journey awaits!
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Map;
