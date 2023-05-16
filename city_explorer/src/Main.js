import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Map from './Map';
import SearchForm from './SearchForm';
import Weather from './Weather';
import axios from 'axios';



function Main() {

    //state variables
    const [searchCity, setSearchCity] = useState('');
    const [displayCity, setDisplayCity] = useState('');
    const [displayMap, setDisplayMap] = useState(false);
    const [displayError, setDisplayError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [displayForecast, setDisplayForecast] = useState(false);
    const [forecastData, setForecastData] = useState([])

    //updates searchCity state on input change
    const updateCity = (event) => {
        setSearchCity(event.target.value);
    };

    useEffect(() => {
        //retrieve waether data when displayCity changes
        const retrieveWeatherData = async () => {

            const weatherAPI = `http://localhost:3001/weather?lat=${displayCity.lat}&lon=${displayCity.lon}&${displayCity}`;

            if (displayCity) {
                try {
                    const response = await axios.get(weatherAPI);
                    setForecastData(response.data);
                    setDisplayForecast(true);
                } catch (error) {
                    setDisplayForecast(false);
                    console.error(error);
                }
            }
        };

        retrieveWeatherData();
    }, [displayCity]);

    // retrieve location data from locationIQ API
    let retrieveLocData = async () => {
        const locationAPI = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${searchCity}&format=json`;

        try {
            const response = await axios.get(locationAPI)
            setDisplayCity(response.data[0]);
            console.log(response.data[0]);
            setDisplayMap(true);
            setDisplayError(false);
        } catch (error) {
            setDisplayMap(false);
            setDisplayError(true);
            setErrorMessage(error.response.status + ': ' + error.response.data.error);
        }

    }

    //render 
    return (

        <Container>
            <h2>Ready to Explore?</h2>
            <SearchForm
                updateCity={updateCity}
                retrieveLocData={retrieveLocData}
                hasError={displayError}
                errorMessage={errorMessage}
            />
            {displayMap && (
                <div>
                    <Map
                        img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${displayCity.lat},${displayCity.lon}&size=600x300&format=jpg&zoom=6`}
                        city={displayCity}
                    />
                    <h3>You're journey awaits! </h3>
                </div>
            )}
            {displayForecast && <Weather forecastData={forecastData} />}
        </Container>
    )

}

export default Main;