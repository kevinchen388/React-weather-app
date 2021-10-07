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
    currentTempNew = (Math.round((Number(props.currentTemp) - 32) * 5/9));
    currentWindNew = (Number(props.currentWind) * 1.609344).toFixed(1);
    currentWindUnit = ' km/h';
  }

  return (
    <div className="currentForecast">
      <p className="currentTemp">{currentTempNew + '°'}<img src={props.currentIcon} alt="current weather icon"></img></p>
      <div className="currentDescription">
        <p>{props.currentDescription}</p>
        <p>{currentWindNew + currentWindUnit}</p>
      </div>
    </div>
  )
}

export default CurrentForecast
