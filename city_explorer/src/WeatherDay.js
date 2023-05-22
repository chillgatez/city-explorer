import React from 'react';


function WeatherDay(props) {


    return (

        <div>
            <h3>Forecast for {props.date}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default WeatherDay;

