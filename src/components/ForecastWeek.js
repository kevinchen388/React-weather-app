import React from 'react'

const ForecastWeek = (props) => {
  let forecastNew;

  if (props.units === 'imperial') {
    //deep copy of array, so that it is NOT a reference
    forecastNew = JSON.parse(JSON.stringify(props.forecast));

  }
  else {
    forecastNew = JSON.parse(JSON.stringify(props.forecast));

    for (var i = 0; i < 5; i++) {
      const newTemp = (Math.round((Number(props.forecast[i].temp) - 32) * 5/9 ));
      forecastNew[i].temp = (newTemp);
    }

    // props.forecast.forEach((element, index) => {
    //   console.log(((Number(element.temp) - 32) * 5/9 ).toFixed(1));
    //   console.log(element)
    //   forecastNew[index].temp = (Number(element.temp) - 1);
    //   console.log('x')
    // });
  }
  
  return (
    <div className="forecastWeek">
      {forecastNew.map((forecastDay) => (
        <div key={forecastDay.day} className="forecastDay">
          <h2>{forecastDay.day}</h2>
          <img src={forecastDay.icon} alt="current weather icon"></img>
          <h3>{forecastDay.temp + '°'}</h3>
        </div>
      ))}

    </div>
  )
}

export default ForecastWeek
