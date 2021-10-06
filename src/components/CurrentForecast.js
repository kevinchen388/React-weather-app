import React from 'react';


const CurrentForecast = (props) => {

  return (
    <div>
      <p>{props.currentTemp}</p>
      <img src={props.currentIcon} alt="current weather icon"></img>
      <p>{props.currentDescription}</p>
      <p>{props.currentWind}</p>
    </div>
  )
}

export default CurrentForecast
