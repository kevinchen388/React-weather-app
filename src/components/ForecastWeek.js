import React from 'react'

const ForecastWeek = (props) => {

  return (
    <div>
      {props.forecast.map((forecastDay) => (
        <div key={forecastDay.day}>
          <h2>{forecastDay.day}</h2>
          <h2>{forecastDay.temp}</h2>
          <img src={forecastDay.icon} alt="current weather icon"></img>
        </div>
      ))}

    </div>
  )
}

export default ForecastWeek
