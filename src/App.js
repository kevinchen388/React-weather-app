import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import CurrentForecast from './components/CurrentForecast';
import ToggleButton from './components/ToggleButton';
import ForecastWeek from './components/ForecastWeek';


function App() {
  const url = "https://api.openweathermap.org/data/2.5/onecall?lat=41.8781&lon=-87.6298&exclude=minutely,hourly,alerts&units=imperial&appid=619ea7a17769c9a0608b5baaa12f687c"

  //date
  var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const d = new Date();
  const dateString = d.toLocaleDateString("en-US", options);
  const day = d.getDay();

  //current
  const [currentTemp, setCurrentTemp] = useState('');
  const [currentWind, setCurrentWind] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentIcon, setCurrentIcon] = useState('');

  //forecast
  let [forecast, setForecast] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(url);
      console.log(response.data);

      //current
      setCurrentTemp(Math.round(response.data.current.temp) + '°');
      setCurrentWind(Math.round(response.data.current.wind_speed) + ' mph');
      setCurrentDescription(response.data.current.weather[0].description);
      setCurrentIcon(Iconify(response.data.current.weather[0].main));

      //next day
      let nextDay = {day: Dateify(day + 1), temp: Math.round(response.data.daily[0].temp.day), icon:Iconify(response.data.daily[0].weather[0].main)};
      setForecast(forecast => [...forecast, nextDay]);

      //2 days
      nextDay = {day: Dateify(day + 2), temp: Math.round(response.data.daily[1].temp.day), icon:Iconify(response.data.daily[1].weather[0].main)};
      setForecast(forecast => [...forecast, nextDay]);

      //3 days
      nextDay = {day: Dateify(day + 3), temp: Math.round(response.data.daily[2].temp.day), icon:Iconify(response.data.daily[2].weather[0].main)};
      setForecast(forecast => [...forecast, nextDay]);

      //4 days
      nextDay = {day: Dateify(day + 4), temp: Math.round(response.data.daily[3].temp.day), icon:Iconify(response.data.daily[3].weather[0].main)};
      setForecast(forecast => [...forecast, nextDay]);

      //5 days
      nextDay = {day: Dateify(day + 5), temp: Math.round(response.data.daily[4].temp.day), icon:Iconify(response.data.daily[4].weather[0].main)};
      setForecast(forecast => [...forecast, nextDay]);
    };
 

    fetchData();
  }, []);


  return (
    <div className="App">
      <Header 
        date={dateString} >
      </Header>
      <div className="container">
        <CurrentForecast
          currentTemp={currentTemp} 
          currentWind={currentWind} 
          currentDescription={currentDescription} 
          currentIcon={currentIcon} >
        </CurrentForecast>
        <ToggleButton>

        </ToggleButton>
        <ForecastWeek forecast={forecast.slice(0,5)}></ForecastWeek>
      </div>
    </div>
  );
}


function Iconify(iconDescription) {
  if (iconDescription === "Clouds") {
    return '../images/Cloud-Sun.svg';
  }
  else if (iconDescription === "Drizzle") {
    return '../images/Cloud-Drizzle-Sun-Alt.svg';
  }
  else if (iconDescription === "Thunderstorm") {
    return '../images/Cloud-Lightning.svg';
  }
  else if (iconDescription === "Rain" || "Snow") {
    return '../images/Cloud-Drizzle-Alt.svg';
  }
  else {
    return '../images/Cloud-Sun.svg';
  }
}


function Dateify(dayNum) {
  dayNum = dayNum % 7;
  if (dayNum === 0) {
    return 'Sun';
  }
  else if (dayNum === 1) {
    return 'Mon';
  }
  else if (dayNum === 2) {
    return 'Tue';
  }
  else if (dayNum === 3) {
    return 'Wed';
  }
  else if (dayNum === 4) {
    return 'Thu';
  }
  else if (dayNum === 5) {
    return 'Fri';
  }
  else {
    return 'Sat';
  }
}


export default App;
