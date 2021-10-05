import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header.js';
import ToggleButton from './components/ToggleButton';
import CurrentForecast from './components/CurrentForecast';
import ForecastWeek from './components/ForecastWeek';

function App() {
  const url = "https://api.openweathermap.org/data/2.5/onecall?lat=41.8781&lon=-87.6298&exclude=minutely,hourly,alerts&units=imperial&appid=619ea7a17769c9a0608b5baaa12f687c"
  //const [data, setData] = useState( [] );

  //current
  const [currentTemp, setCurrentTemp] = useState('');
  const [currentWind, setCurrentWind] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentIcon, setCurrentIcon] = useState('');

  //1 day
  const [OneTemp, setOneTemp] = useState('');
  const [OneIcon, setOneIcon] = useState('');

  //2 days
  const [TwoTemp, setTwoTemp] = useState('');
  const [TwoIcon, setTwoIcon] = useState('');

  //3 days
  const [ThreeTemp, setThreeTemp] = useState('');
  const [ThreeIcon, setThreeIcon] = useState('');

  //4 days
  const [FourTemp, setFourTemp] = useState('');
  const [FourIcon, setFourIcon] = useState('');

  //5 days
  const [FiveTemp, setFiveTemp] = useState('');
  const [FiveIcon, setFiveIcon] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(url);
      console.log(response.data);

      //current
      setCurrentTemp(response.data.current.temp);
      setCurrentWind(response.data.current.wind_speed);
      setCurrentDescription(response.data.current.weather[0].description);
      setCurrentIcon(response.data.current.weather[0].main);

      //next day
      setOneTemp(response.data.daily[0].temp.day); 
      setOneIcon(response.data.daily[0].weather[0].main);

      //2 days
      setTwoTemp(response.data.daily[1].temp.day); 
      setTwoIcon(response.data.daily[1].weather[0].main);

      //3 days
      setThreeTemp(response.data.daily[2].temp.day); 
      setThreeIcon(response.data.daily[2].weather[0].main);

      //4 days
      setFourTemp(response.data.daily[3].temp.day); 
      setFourTemp(response.data.daily[3].weather[0].main);

      //5 days
      setFiveTemp(response.data.daily[4].temp.day); 
      setFiveIcon(response.data.daily[4].weather[0].main);
    };
 
    fetchData();
  }, []);


  return (
    <div className="App">
      <Header 
        currentTemp={currentTemp} 
        currentWind={currentWind} 
        currentDescription={currentDescription} 
        currentIcon={currentIcon}>
      </Header>
      <div className="container">
        <CurrentForecast>

        </CurrentForecast>
        <ToggleButton>

        </ToggleButton>
        <ForecastWeek>
          
        </ForecastWeek>
      </div>
    </div>
  );
}

export default App;
