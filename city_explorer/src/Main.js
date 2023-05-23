import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Map from './Map';
import SearchForm from './SearchForm';
import Weather from './Weather';
import Movies from './Movies';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



function Main() {

    //state variables
    const [searchCity, setSearchCity] = useState('');
    const [cityData, setCityData] = useState('');
    const [displayMap, setDisplayMap] = useState(false);
    const [displayError, setDisplayError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [displayForecast, setDisplayForecast] = useState(false);
    const [forecastData, setForecastData] = useState([])
    const [displayMovie, setDisplayMovie] = useState(false);
    const [movieData, setMovieData] = useState([])

    //server url
    const cityServer = 'https://city-explorer-api-iixi.onrender.com';

    //updates searchCity state on input change
    const updateCity = (event) => {
        setSearchCity(event.target.value);
    };


    // retrieve location data from locationIQ API
    let retrieveLocData = async () => {
        const locationAPI = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_API_KEY}&q=${searchCity}&format=json`;

        try {
            const response = await axios.get(locationAPI)
            setCityData(response.data[0]);
            console.log(response.data[0]);
            setDisplayMap(true);
            setDisplayError(false);
        } catch (error) {
            setDisplayMap(false);
            setDisplayError(true);
            setErrorMessage(error.response.status + ': ' + error.response.data.error);
        }

    }


    // Retrieve movie data from the server
    const retrieveMovieData = async () => {
        const movieAPI = `${cityServer}/movies?searchQuery=${searchCity}`;

        try {
            const response = await axios.get(movieAPI, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${process.env.RENDER_APP_API_KEY}`
                }
            });
            console.log(response.data);
            setMovieData(response.data);
            setDisplayMovie(true);
        } catch (error) {
            setDisplayMovie(false);
            setErrorMessage(error.response.status + ': ' + error.response.data.error);
        }
    };

    // Retrieve weather data from the server
    const retrieveWeatherData = async (lat, lon) => {
        const weatherAPI = `${cityServer}/weather?lat=${cityData.lat}&lon=${cityData.lon}`;

        try {
            const response = await axios.get(weatherAPI, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${process.env.RENDER_APP_API_KEY}`
                }
            });
            console.log(response.data);
            setForecastData(response.data);
            setDisplayForecast(true);
        } catch (error) {
            setDisplayForecast(false);
            setErrorMessage(error.response.status + ': ' + error.response.data.error);
        }
    };

    useEffect(() => {
        if (cityData !== "" || undefined) {
            retrieveWeatherData(cityData.lat, cityData.lon);
            retrieveMovieData(cityData);
        }
    }, [cityData]);

    //render 
    return (

        <div>
            <SearchForm
                updateCity={updateCity}
                retrieveLocData={retrieveLocData}
                hasError={displayError}
                errorMessage={errorMessage}
            />
            <Container>
                {displayMap && (
                    <div>
                        <Map
                            img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${cityData.lat},${cityData.lon}&size=600x300&format=jpg&zoom=6`}
                            city={cityData}
                        />
                        <p>Your journey awaits! </p>
                    </div>
                )}
                {displayForecast && (
                    <div>
                        <Weather forecastData={forecastData} />
                    </div>
                )}
                {displayMovie && (
                    <div>
                        <Movies movieData={movieData} />
                    </div>
                )}

            </Container>
        </div>
    )

}

export default Main;