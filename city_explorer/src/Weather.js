import React from 'react';
import WeatherDay from './WeatherDay';

function Weather(props) {


  return (

    <>
    {props.forecastData.map((value) => {
      <WeatherDay
          key={value.date}
          date={value.date}
          description={value.description}
        />
    })
    } </>
  )
}

export default Weather;
