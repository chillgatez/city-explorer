import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Map from './Map';
import SearchForm from './SearchForm';
import axios from 'axios';



function Main() {
    const [searchCity, setSearchCity] = useState('');
    const [displayCity, setDisplayCity] = useState('');
    const [displayMap, setDisplayMap] = useState(false);
    const [displayError, setDisplayError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const updateCity = (event) => {
        setSearchCity(event.target.value);
    };

    let retrieveLocData = async () => {
        const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${searchCity}&format=json`;

        let displayCity;
        try {
            displayCity = await axios.get(API)
            setDisplayCity(displayCity.data[0]);
            console.log(displayCity.data[0]);
            setDisplayMap(true);
            setDisplayError(false);
        } catch (error) {
            setDisplayMap(false);
            setDisplayError(true);
            setErrorMessage(error.response.status + ': ' + error.response.data.error);
        }

    }

    return (

        <Container>
            <h2>Ready to Explore {displayCity}</h2>
            <SearchForm
                updateCity={updateCity}
                retrieveLocData={retrieveLocData}
                hasError={displayError}
                errorMessage={errorMessage}
            />
            {displayMap &&
                <div>
                    <Map
                        img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${displayCity.lat},${displayCity.lon}&size=600x300&format=jpg&zoom=6`}
                        city={displayCity}
                    />
                    <p>Located at the coordinates of {displayCity.lat}, {displayCity.lon}.</p>
                    <p>You're journey awaits! </p>
                </div>
            }
        </Container>
    )

}

export default Main;