import React from 'react';

function Weather(props) {


  return (

    <> {props.forecastData.map((value) => {
      return (
        <div>
          <h3>Forecast for {value[0].date}</h3>
          <p>{value[0].description}</p>

          <h3>Forecast for {value[1].date}</h3>
          <p>{value[1].description}</p>


          <h3>Forecast for {value[2].date}</h3>
          <p>{value[2].description}</p>
        </div>

      )
    })
    } </>
  )
}

export default Weather;
