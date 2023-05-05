import React from 'react';
import Card from 'react-bootstrap/Card'

function Map(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.city.display_name}</Card.Title>
                <Card.Img variant="top" alt={props.city.display_name} src={props.img_url} />
                <Card.Text>
                    Located at the coordinates of {props.city.lat}, {props.city.lon}. You're journey awaits!
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Map;
