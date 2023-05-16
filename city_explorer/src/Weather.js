import React from 'react';

function Weather({forecastData}) {

  return (
    <div>
      <h3>Weather Forecast</h3>
      {forecastData.map((forecast, index) => (
        <div key={index}>
          <h4>{forecast.date}</h4>
          <p>Description: {forecast.description}</p>
          <p>Longitude: {forecast.lon}</p>
          <p>Latitude: {forecast.lat}</p>
          <p>City: {forecast.city_name}</p>
        </div>
      ))}
    </div>
  );
}

export default Weather;
