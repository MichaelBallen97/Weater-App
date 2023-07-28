import { useState } from 'react';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import InfoApp from './components/InfoApp/InfoApp';
import Search from './components/Search/Search';
import './assets/fonts/fonts.css'
import './assets/loader.css'

function App() {
  const [location, setLocation] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation(position.coords);
      },
      error => {
        console.error(error);
      }
    );
  }, [])

  useEffect(()=> {
    const APIKEY = "10432778a1c28d4709d502ac3de9c363";

    if(location != null) {

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${APIKEY}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => {
          setWeatherInfo(data);
          console.log(data)
        })
        .catch(error => console.log(error));
    }
  }, [location])

  return (
    <main>
      <Header />
      <Search />
      <InfoApp data={weatherInfo}/>
    </main>
  )
}

export default App
