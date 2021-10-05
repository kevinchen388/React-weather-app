import React from 'react'

const CurrentForecast = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.currentTemp}</p>
      <p>{props.currentWind}</p>
      <p>{props.currentIcon}</p>
    </div>
  )
}

export default CurrentForecast
