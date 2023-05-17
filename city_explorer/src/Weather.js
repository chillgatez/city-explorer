import React from 'react';

function Weather(props) {


  return (

    <> {props.forecastData.map((value) => {
        return (
          <div>
          <h3>Forecast for {value.date}</h3>
          <p>Low of {value.low}, high of {value.high} with {value.description}</p>
          </div>
        )
      })
    } </>
  )
}

export default Weather;
