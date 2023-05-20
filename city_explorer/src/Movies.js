import Carousel from 'react-bootstrap/Carousel';
import React from 'react';


function Movies(props) {
    return (

        <Carousel>
            {props.movieData.map(value => {
  return (
    <Carousel.Item key={value.id}>
      <img
        className="d-block w-100"
        src={value.image_url}
        alt= {`theatrical poster for ${value.title}`}
      />
      <Carousel.Caption>
        <h3>{value.title}</h3>
        <p>{value.released_on}</p>
        <p>{value.overview}</p>
        <p>{value.popularity}</p>
        <p>averaged {value.average_votes} votes out of {value.total_votes} total votes</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
})}
            
        </Carousel >

    )


}
export default Movies; 