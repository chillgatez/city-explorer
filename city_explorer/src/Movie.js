import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Movie (props) {
    

    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={props.image_url}
                alt={`theatrical poster for ${props.title}`}
            />
            <Carousel.Caption>
                <h3>{props.title}</h3>
                <p>{props.released_on}</p>
                <p>{props.overview}</p>
                <p>{props.popularity}</p>
                <p>averaged {props.average_votes} votes out of {props.total_votes} total votes</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

export default Movie;