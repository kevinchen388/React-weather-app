import React from 'react';


const CurrentForecast = (props) => {
  let currentTempNew;
  let currentWindNew;
  let currentWindUnit;

  if (props.units === 'imperial') {
    currentTempNew = props.currentTemp;
    currentWindNew = props.currentWind;
    currentWindUnit = ' mph';
  }
  else {
    currentTempNew = (Number(props.currentTemp) - 32) * 5/9;
    currentWindNew = (Number(props.currentWind) * 1.609344).toFixed(1);
    currentWindUnit = ' km/h';
  }

  return (
    <div>
      <p>{currentTempNew + '°'}</p>
      <img src={props.currentIcon} alt="current weather icon"></img>
      <p>{props.currentDescription}</p>
      <p>{currentWindNew + currentWindUnit}</p>
    </div>
  )
}

export default CurrentForecast
