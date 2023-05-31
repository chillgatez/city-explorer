import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Movie from './Movie';


function Movies(props) {
    return (

        <Carousel>
            {props.movieData.map((value, idx) => (
                <Movie
                    key={idx}
                    imageUrl={value.image_url}
                    title={value.title}
                    releasedOn={value.released_on}
                    overview={value.overview}
                    popularity={value.popularity}
                    averageVotes={value.average_votes}
                    totalVotes={value.total_votes}
                />
            ))}
        </Carousel >

    )


}
export default Movies; 